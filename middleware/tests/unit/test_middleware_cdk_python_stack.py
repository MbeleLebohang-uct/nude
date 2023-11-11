import aws_cdk as core
import aws_cdk.assertions as assertions
from app import MIDDLEWARE_NAME, STAGE

from middleware.middleware_stack import MiddlewareStack

def test_sqs_queue_created():
    app = core.App()
    stack = MiddlewareStack(app, f"{STAGE}-{MIDDLEWARE_NAME}-middleware-stack")
    template = assertions.Template.from_stack(stack)
