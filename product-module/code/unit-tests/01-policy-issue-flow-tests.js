/* global expect moment ReactivationOption InvalidRequestError AlteredPolicy AlterationPackage QuotePackage Application Policy generatePolicyNumber Joi RequotePolicy root */
// This file is used by the 'rp test -u' unit testing command and allows you to write and run unit tests locally.
// This file automatically get's commented out by the CLI tool when being pushed to Root.
// This ensures that it does not interfere with production execution.

describe('Policy issue flow', function () {
  // Setup
  let quotePackage;
  let applicationPackage;
  before(function () {
    quotePackage = getQuote(quoteData);
    applicationPackage = getApplication(
      applicationData,
      undefined,
      // @ts-ignore
      quotePackage[0],
    );
  });

  // Quote hook
  describe('Quote hook', function () {
    it('valid data should pass validation', function () {
      const validationResult = validateQuoteRequest(quoteData);
      expect(validationResult.error).to.equal(null);
    });

    it('should return a suggested premium of R511.90 yearly (in cents) and R389.28 monthly', function () {
      console.log(JSON.stringify(quotePackage))
      expect(quotePackage[0].suggested_premium).to.equal(47389); // cents
      expect(quotePackage[1].suggested_premium).to.equal(54302); // cents
    });
  });

  // Application hook
  describe('Application hook', function () {
    it('should pass application data validation ', function () {
      const validationResult = validateApplicationRequest(
        applicationData,
        undefined,
        undefined,
      );
      expect(validationResult.error).to.equal(null);
    });
    it('should return the correct module data', function () {
      expect(applicationPackage.module.sales_channel).to.equal(
        'mobile_app',
      );
    });
  });

  // Policy issue hook
  describe('Policy issue hook', function () {
    it('should create a policy with the correct parameters', function () {
      const policy = getPolicy(applicationPackage, undefined, undefined);
      expect(policy.package_name).to.equal('proteas_nude_insurance');
      expect(policy.monthly_premium).to.equal(47389);
      expect(policy.sum_assured).to.equal(7351174);
    });
  });
});
