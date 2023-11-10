/**
 * Quote schema data. Used by rp generate to generate the schema for this step
 */
const quoteSchema = Joi.object().keys({
  date_of_birth: Joi.date().iso()
    .max(moment().format('YYYY-MM-DD'))
    .required(),
  province: Joi.string()
    .valid(Object.keys(GEOGRAPHICAL_FACTORS_BY_PROVINCE))
    .required(),
  devices: Joi.array()
    .min(1)
    .max(5).items(deviceDetailsValidation)
    .required(),
});

/**
 * Validates the quote request data.
 * @param {Record<string, any>} data The data received in the body of the
 *     [Create a quote](https://docs.rootplatform.com/reference/getting-a-quote-2) request
 *     (without the `type` property).
 * @return {{error: any; result: any}} The [validation result](https://joi.dev/api/?v=12.1.0#validatevalue-schema-options-callback).
 *    If there are no errors, the `value` property will contain the validated data, which is passed to `getQuote`.
 * @see {@link https://docs.rootplatform.com/docs/quote-hook Quote hook}
 */
const validateQuoteRequest = (data) => {
  const validationResult = Joi.validate(
    data,
    quoteSchema.required(),
    { abortEarly: false },
  );
  return validationResult;
};

/**
 * Generates an array of quote packages from the quote request data.
 * @param {Record<string, any>} data The validated data returned by `validateQuoteRequest` as `result.value`.
 * @return {QuotePackage[]} The quote package(s) that will be returned by the
 *     [Create a quote](https://docs.rootplatform.com/reference/getting-a-quote-2) endpoint.
 * @see {@link https://docs.rootplatform.com/docs/quote-hook Quote hook}
 */
const getQuote = (data) => {

  // (BaseRate+∑ 
  //   i=1
  //   n
  //   ​
  //    CoverageFactor 
  //   i
  //   ​
  //    ×DeviceInfo 
  //   i
  //   ​
  //    )×UsageMultiplier×GeographicalMultiplier×SecurityDiscount

  const age = getAgeFromDateOfBirth(data.date_of_birth);

  const quotePackage = new QuotePackage({
    package_name: 'proteas_nude_insurance', // The name of the "package" of cover
    sum_assured: 10000 * 100, // Set the total, aggregated cover amount
    base_premium: 100 * 100, // Should be an integer, cents
    suggested_premium: 100 * 100, // Should be an integer, cents
    billing_frequency: 'monthly', // Can be monthly or yearly
    module: {
      ...data,
    },
    input_data: { ...data },
  });
  return [quotePackage];
};
