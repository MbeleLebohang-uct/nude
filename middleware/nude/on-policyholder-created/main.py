import os
import json


def handler(event, context):
  status_code = 200

  # Handle on policy issued webhook
  print('---------On policyholder created!----------')

  results = {
    'environment': os.getenv('ENVIRONMENT'),
    'message': 'Successfuly handled!',
    'body': json.loads(event["body"]),
    'headers': event["headers"]
  }

  print(event['body'])

  return {
    'statusCode': status_code,
    'headers': {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    'body': json.dumps(results),
    "isBase64Encoded": False
  }