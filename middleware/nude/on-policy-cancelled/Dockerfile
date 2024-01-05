FROM public.ecr.aws/lambda/python:3.8 as build
WORKDIR /build
# Copy function code
COPY main.py ${LAMBDA_TASK_ROOT}
# Add local dependencies
ADD app app

# Install the function's dependencies using file requirements.txt
# from your project folder.
COPY requirements.txt ${LAMBDA_TASK_ROOT}

# RUN echo "Hello, this is an echo message."
# CMD ["/bin/echo", "Hello, this is an echo message."]
# RUN which pip3
# RUN which pip
# RUN which python
# RUN pip3 --version
# RUN pip --version
# RUN  pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"
# Create a startup script for CMD to execute
RUN echo '#!/bin/sh\npip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"\nexec "$@"' > /usr/local/bin/start.sh \
    && chmod +x /usr/local/bin/start.sh

# Set the CMD to run the startup script
CMD ["/usr/local/bin/start.sh", "main.handler"]