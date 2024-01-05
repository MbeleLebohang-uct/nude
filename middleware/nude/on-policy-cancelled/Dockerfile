FROM public.ecr.aws/lambda/python:3.8 as build
WORKDIR /build
# Copy function code
COPY main.py ${LAMBDA_TASK_ROOT}
# Add local dependencies
ADD app app

# Install the function's dependencies using file requirements.txt
# from your project folder.
COPY requirements.txt ${LAMBDA_TASK_ROOT}

ARG BUILD_NAME
RUN echo ${BUILD_NAME}

WORKDIR ${LAMBDA_TASK_ROOT}
RUN echo "Hello, this is an echo message."
RUN which pip3
# RUN which pip
# RUN which python
# RUN pip3 --version
# RUN pip --version
RUN  pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"
# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD ["main.handler"]