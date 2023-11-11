import os
import json


def handler(event, context):
  status_code = 200

  # Handle on policy issued webhook
  print('---------On policy issued!----------')

  results = {
    'environment': os.getenv('ENVIRONMENT'),
    'message': 'Successfuly handled!',
  }

  return {
    'statusCode': status_code,
    'headers': {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    'body': json.dumps(results),
    "isBase64Encoded": False
  }