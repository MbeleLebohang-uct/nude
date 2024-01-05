FROM public.ecr.aws/lambda/python:3.8
# Copy function code
COPY main.py ${LAMBDA_TASK_ROOT}
# Add local dependencies
ADD app app

COPY requirements.txt ${LAMBDA_TASK_ROOT}

# RUN  pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"

CMD ["main.handler"]