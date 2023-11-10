/**
 * Validates the application request data.
 * @param {Record<string, any>} data The data received in the body of the
 *     [Create an application](https://docs.rootplatform.com/reference/getting-a-quote-2) request
 *     (without the `policyholder_id`, `quote_package_id`, and `billing_day` properties).
 * @param {PlatformPolicyholder} policyholder The policyholder that will be linked to the application
 * @param {PlatformQuotePackage} quote_package The quote package from which the application is created
 * @return {{error: any; result: any}} The [validation result](https://joi.dev/api/?v=12.1.0#validatevalue-schema-options-callback).
 *    If there are no errors, `result.value` property will contain the validated data, which is passed to `getApplication`.
 * @see {@link https://docs.rootplatform.com/docs/application-hook Application hook}
 */
const validateApplicationRequest = (data, policyholder, quote_package) => {
  // Custom validation can be specified in the function body
  const validationResult = Joi.validate(
    data,
    Joi.object()
      .keys({
        // keys and validation
      })
      .required(),
    { abortEarly: false },
  );
  return validationResult;
};

/**
 * Generates an application from the application request data, policyholder and quote package.
 * @param {Record<string, any>} data The validated data, returned by `validateApplicationRequest` as `result.value`.
 * @param {PlatformPolicyholder} policyholder The policyholder that will be linked to the application
 * @param {PlatformQuotePackage} quote_package The quote package from which the application is created
 * @return {Application} The application that will be returned by the
 *     [Create an application](https://docs.rootplatform.com/reference/create-an-application) endpoint.
 * @see {@link https://docs.rootplatform.com/docs/application-hook Application hook}
 */
const getApplication = (data, policyholder, quote_package) => {
  const application = new Application({
    // The top-level fields are standard across all product modules
    package_name: quote_package.package_name,
    sum_assured: quote_package.sum_assured,
    base_premium: quote_package.base_premium,
    monthly_premium: quote_package.suggested_premium,
    input_data: { ...data },
    module: {
      // The module object is used to store product-specific fields
      ...quote_package.module,
      ...data,
    },
  });
  return application;
};
