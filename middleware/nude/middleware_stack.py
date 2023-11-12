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

        environment={
            'ROOT_API_KEY': getenv('ROOT_API_KEY'),
            'ROOT_WEBHOOK_SECRET': getenv('ROOT_WEBHOOK_SECRET'),
            'ENVIRONMENT': 'production' if stage == 'main' else 'sandbox' # main branch deployments == production
        }

        self._add_simple_lambda_function('on-policy-issued', 'POST', webhooks_resources, environment)
        self._add_docker_lambda_function('on-policy-cancelled', 'POST', webhooks_resources, environment)
        self._add_simple_lambda_function('on-policyholder-created', 'POST', webhooks_resources, environment)

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
                code=_lambda.DockerImageCode.from_image_asset(path.join(path.dirname(__file__), key), platform=_ecr_assets.Platform.LINUX_ARM64),
                memory_size=3008,
                timeout=Duration.seconds(60),
                environment=environment
            )
        )
        resources.add_method(http_method, lambda_integration)



