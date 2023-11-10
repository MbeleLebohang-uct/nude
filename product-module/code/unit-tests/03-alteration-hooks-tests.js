/* global expect moment ReactivationOption InvalidRequestError AlteredPolicy AlterationPackage QuotePackage Application Policy generatePolicyNumber Joi RequotePolicy root */
// This file is used by the 'rp test -u' unit testing command and allows you to write and run unit tests locally.
// This file automatically get's commented out by the CLI tool when being pushed to Root.
// This ensures that it does not interfere with production execution.

describe('Amendment alteration hook', function () {
  const alterationHookKey = '<ALTERATION HOOK KEY>';

  it('valid data should pass validation', function () {
    const validationResult = validateAlterationPackageRequest({
      alteration_hook_key: alterationHookKey,
      data: validAlterationData,
      policy: undefined,
      policyholder: undefined,
    });
    expect(validationResult.error).to.equal(null);
  });

  it('invalid pet name should generate validation error', function () {
    const validationResult = validateAlterationPackageRequest({
      alteration_hook_key: alterationHookKey,
      data: invalidAlterationData,
      policy: undefined,
      policyholder: undefined,
    });
    expect(validationResult.error.message).to.equal(
      `<COPY JOI ERROR MESSAGE HERE>`,
    );
  });

  it('should update the <PROPERTY> to "<PROPERTY>"', function () {
    const alterationPackage = getAlteration({
      alteration_hook_key: alterationHookKey,
      data: validAlterationData,
      // @ts-ignore
      policy: examplePolicy,
      policyholder: undefined,
    });
    expect(alterationPackage.module.SOME_PROPERTY).to.equal('<SOME PROPERTY>');
  });
});
