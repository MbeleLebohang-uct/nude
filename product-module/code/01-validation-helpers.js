/**
 * Device validation object
 */
const deviceDetailsValidation = Joi.object().keys({
  brand: Joi.string()
    .valid(BRANDS)
    .required(),
  worldwide_cover: Joi.boolean()
    .required(),
  device_usage: Joi.string()
    .valid(Object.keys(USAGE_FACTORS))
    .required(),
  model: Joi.string()
    .valid(MODELS)
    .required(),
  model_other: Joi.when('model', {
    is: 'Other',
    then: Joi.string()
      .required(),
    otherwise: Joi.forbidden().allow(null),
  }),
  value_amount: Joi.number()
    .required()
    .min(1000*100)
    .max(50000*100)
    .meta({ root_type: 'currency', props: { prefix: 'R' } }),
});
