FROM public.ecr.aws/lambda/python:3.8
# Copy function code
COPY main.py ${LAMBDA_TASK_ROOT}
# Add local dependencies
ADD app app

# Install the function's dependencies using file requirements.txt
# from your project folder.
COPY requirements.txt  .
RUN pip3 --version
RUN pip --version
RUN  pip install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"
# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD ["main.handler"]