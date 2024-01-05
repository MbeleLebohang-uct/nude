from os import getenv, path
from aws_cdk import (
    Duration,
    Stack,
    aws_apigateway as _apigateway,
    aws_lambda as _lambda,
    aws_ecr_assets as _ecr_assets,
)

from constructs import Construct

class MiddlewareStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, stage: str, name: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        self.name = name
        self.stage = stage

        root_webhook_handler_rest_api = _apigateway.RestApi(self, f"{self.stage}-{self.name}-root-webhook-handler-rest-api",
            rest_api_name=f"{stage}-{name}-root-webhook-handler-rest-api",
            description="API Gateway for handling all the webhook events from Root platform"
        )

        v1 = root_webhook_handler_rest_api.root.add_resource("v1")
        webhooks_resources = v1.add_resource("webhooks")

        base_environment={
            'ROOT_API_KEY': getenv('ROOT_API_KEY'),
            'PLATFORM_SUPABASE_SERVICE_ROLE_KEY': getenv('PLATFORM_SUPABASE_SERVICE_ROLE_KEY'),
            'PLATFORM_SUPABASE_URL': getenv('PLATFORM_SUPABASE_URL'),
            'PLATFORM_SUPABASE_ANON_KEY': getenv('PLATFORM_SUPABASE_ANON_KEY'),
            'ENVIRONMENT': 'sandbox' # main branch deployments == production, you can use stage to see which deployment this is
        }

        self._add_docker_lambda_function('on-policy-cancelled', 'POST', webhooks_resources, {
            **base_environment,
            'ROOT_WEBHOOK_SECRET': getenv('POLICY_CANCELLED_WEBHOOK_SECRET')
        })
        self._add_simple_lambda_function('on-policy-issued', 'POST', webhooks_resources, {
            **base_environment, 
            'ROOT_WEBHOOK_SECRET': getenv('POLICY_ISSUED_WEBHOOK_SECRET')
        })
        self._add_simple_lambda_function('on-policyholder-created', 'POST', webhooks_resources, {
            **base_environment,
            'ROOT_WEBHOOK_SECRET': getenv('POLICYHOLDER_EVENTS_WEBHOOK_SECRET')
        })

    def _add_simple_lambda_function(self, key, http_method, parent_resource, environment):
        resources = parent_resource.add_resource(key)
        lambda_integration = _apigateway.LambdaIntegration(
            _lambda.Function(self, f"{self.stage}-{self.name}-{key}-lambda-function",
                runtime=_lambda.Runtime.PYTHON_3_8,
                code=_lambda.Code.from_asset(path.join(path.dirname(__file__), key)),
                handler='main.handler',
                memory_size=3008,
                timeout=Duration.seconds(60),
                environment=environment
            )
        )
        resources.add_method(http_method, lambda_integration)

    def _add_docker_lambda_function(self, key, http_method, parent_resource, environment):
        resources = parent_resource.add_resource(key)
        lambda_integration = _apigateway.LambdaIntegration(
            _lambda.DockerImageFunction(self, f"{self.stage}-{self.name}-{key}-lambda-function",
                code=_lambda.DockerImageCode.from_image_asset(path.join(path.dirname(__file__), key)),
                memory_size=3008,
                timeout=Duration.seconds(60),
                environment=environment
            )
        )
        resources.add_method(http_method, lambda_integration)



