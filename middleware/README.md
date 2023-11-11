
# Welcome Root middleware CDK Python project!

This is a blank project for Root middleware development using AWS CDK with Python.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

This project is set up like a standard Python project.  The initialization
process also creates a virtualenv within this project, stored under the `.venv`
directory.  To create the virtualenv it assumes that there is a `python3`
(or `python` for Windows) executable in your path with access to the `venv`
package. If for any reason the automatic creation of the virtualenv fails,
you can create the virtualenv manually.

To manually create a virtualenv on MacOS and Linux:

```
$ python3 -m venv .venv
```

After the init process completes and the virtualenv is created, you can use the following
step to activate your virtualenv.

```
$ source .venv/bin/activate
```

If you are a Windows platform, you would activate the virtualenv like this:

```
% .venv\Scripts\activate.bat
```

Once the virtualenv is activated, you can install the required dependencies.

```
$ pip install -r requirements.txt
```

## Environment setup
Copy `.env.sample` and rename it to `.env`. All values in this file are not optional, so
please set all of the to a valid value.

## Useful CDK commands

At this point you can now synthesize the CloudFormation template for this code.

```
$ cdk synth
```


 * `cdk ls`          list all stacks in the app
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk docs`        open CDK documentation


## Local development using SAM

### Building SAM application
The workflow usually start with synthesizing CloudFormation template using:

```
$ cdk synth
```

This will generate a template file in `cdk.out` folder with the
name `<STAGE>-<MIDDLEWARE_NAME>-middleware-stack.template.json`. Using this file, you can 
use `sam build` to build a sam application as follows:

```
$ sam build -t cdk.out/<STAGE>-<MIDDLEWARE_NAME>-middleware-stack.template.json
```

### Running local api
This requires `docker` to be running on your local machine. If that is the case, you can run

```
$ sam local start-api -t cdk.out/<STAGE>-<MIDDLEWARE_NAME>-middleware-stack.template.json
```
to start the api on your local machine.

## Testing
Coming soon!

Enjoy!
