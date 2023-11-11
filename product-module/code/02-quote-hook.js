/**
 * Quote schema data. Used by rp generate to generate the schema for this step
 */
const quoteSchema = Joi.object().keys({
  date_of_birth: Joi.date().iso()
    .max(moment().format('YYYY-MM-DD'))
    .required(),
  axcess_amount: Joi.number()
    .required()
    .meta({ root_type: 'currency', props: { prefix: 'R' } }),
  devices: Joi.array()
    .min(1)
    .max(10).items(deviceDetailsValidation)
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
  const moduleData = buildModuleData(data);
  const basePremium = sumObjectsValue(moduleData.devices, (device) => device.base_premium_amount);
  const premium = sumObjectsValue(moduleData.devices, (device) => device.premium_amount);
  const sumAssured = sumObjectsValue(moduleData.devices, (device) => device.value_amount);

  const monthlyQuotePackage = new QuotePackage({
    package_name: 'proteas_nude_insurance',
    sum_assured: sumAssured,
    base_premium: Math.round(basePremium),
    suggested_premium: Math.round(premium),
    billing_frequency: 'monthly', 
    module: moduleData,
    input_data: { ...data },
  });
  
  const yearlyQuotePackage = new QuotePackage({
    package_name: 'proteas_nude_insurance',
    sum_assured: sumAssured,
    base_premium: Math.round(basePremium*YEARLY_PREMIUM_DISCOUNT),
    suggested_premium: Math.round(premium*YEARLY_PREMIUM_DISCOUNT),
    billing_frequency: 'yearly', 
    module: moduleData,
    input_data: { ...data },
  });
  return [yearlyQuotePackage, monthlyQuotePackage];
};
