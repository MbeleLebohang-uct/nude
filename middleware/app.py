#!/usr/bin/env python3
import os
from pathlib import Path

import aws_cdk as cdk
from dotenv import load_dotenv

from nude.middleware_stack import MiddlewareStack

load_dotenv(dotenv_path=Path(__file__).parent.joinpath(".env"))

app = cdk.App()

STAGE=os.getenv('STAGE')
MIDDLEWARE_NAME=os.getenv('MIDDLEWARE_NAME')
AWS_ACCOUNT_ID=os.getenv('AWS_ACCOUNT_ID')
AWS_REGION=os.getenv('AWS_REGION')

if not STAGE or not MIDDLEWARE_NAME or not AWS_ACCOUNT_ID or not AWS_REGION:
  raise Exception('EnvironmentError: The .env file is missing one of the following variables: STAGE, MIDDLEWARE_NAME, AWS_ACCOUNT_ID or AWS_REGION')

MiddlewareStack(
    app, 
    f"{STAGE}-{MIDDLEWARE_NAME}-middleware-stack",
    stage=STAGE,
    name=MIDDLEWARE_NAME,
    env=cdk.Environment(account=AWS_ACCOUNT_ID, region=AWS_REGION),
)

app.synth()
