FROM public.ecr.aws/lambda/python:3.8

COPY main.py ${LAMBDA_TASK_ROOT}
ADD app app

COPY requirements.txt ${LAMBDA_TASK_ROOT}

SHELL ["/bin/bash", "-c"] 

RUN  pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"

CMD ["main.handler"]