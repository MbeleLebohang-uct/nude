/**
 * Validates the alteration package request data.
 * @param {object} params
 * @param {string} params.alteration_hook_key The alteration hook identifier, as specified in `.root-config.json`.
 * @param {Record<string, any>} params.data The data received in the body of the
 *     [Create an alteration package](https://docs.rootplatform.com/reference/create-an-alteration-package-1) request
 *     (without the `key` property).
 * @param {PlatformPolicy} params.policy The policy to which the alteration package will be applied.
 * @param {PlatformPolicyholder} params.policyholder The policyholder linked to the policy.
 * @return {{error: any; result: any}} The [validation result](https://joi.dev/api/?v=12.1.0#validatevalue-schema-options-callback).
 *    If there are no errors, the `value` property will contain the validated data, which is passed to `getAlteration`.
 * @see {@link https://docs.rootplatform.com/docs/alteration-hooks Alteration hooks}
 */
const validateAlterationPackageRequest = ({
  alteration_hook_key,
  data,
  policy,
  policyholder,
}) => {
  let validationResult;
  switch (alteration_hook_key) {
    case 'KEY':
      validationResult = Joi.validate(
        data,
        Joi.object()
          .keys({
            // keys and validation
          })
          .required(),
        { abortEarly: false },
      );
      return validationResult;
    default:
      throw new Error(`Invalid alteration hook key "${alteration_hook_key}"`);
  }
};

/**
 * Generates an alteration package from the alteration package request data, policy and policyholder.
 * @param {object} params
 * @param {string} params.alteration_hook_key The alteration hook identifier, as specified in `.root-config.json`.
 * @param {Record<string, any>} params.data The validated data returned by `validateAlterationPackageRequest` as `result.value`.
 * @param {PlatformPolicy} params.policy The policy to which the alteration package will be applied.
 * @param {PlatformPolicyholder} params.policyholder The policyholder linked to the policy.
 * @return {AlterationPackage} Alteration package returned by the
 *     [Create an alteration package](https://docs.rootplatform.com/reference/create-an-alteration-package-1)
 *     endpoint.
 * @see {@link https://docs.rootplatform.com/docs/alteration-hooks Alteration hooks}
 */
const getAlteration = ({ alteration_hook_key, data, policy, policyholder }) => {
  let alterationPackage;
  switch (alteration_hook_key) {
    case 'KEY':
      alterationPackage = new AlterationPackage({
        input_data: data,
        sum_assured: policy.sum_assured,
        monthly_premium: policy.monthly_premium,
        change_description: 'DESCRIPTION OF ALTERATION',
        module: {
          ...policy.module,
          ...data,
        },
      });
      return alterationPackage;
    default:
      throw new Error(`Invalid alteration hook key "${alteration_hook_key}"`);
  }
};

/**
 * Applies the alteration package to the policy.
 * Triggered by the [Apply alteration package](https://docs.rootplatform.com/reference/apply-alteration-package-1) endpoint.
 * @param {object} params
 * @param {string} params.alteration_hook_key The alteration hook identifier, as specified in `.root-config.json`.
 * @param {PlatformPolicy} params.policy The policy to which the alteration package will be applied.
 * @param {PlatformPolicyholder} params.policyholder The policyholder linked to the policy.
 * @param {PlatformAlterationPackage} params.alteration_package The alteration package to be applied to the policy.
 * @return {AlteredPolicy} The altered policy. This object is **not** returned over the endpoint.
 *    Instead, the alteration package is returned with a status of `applied`.
 * @see {@link https://docs.rootplatform.com/docs/alteration-hooks Alteration hooks}
 */
const applyAlteration = ({
  alteration_hook_key,
  policy,
  policyholder,
  alteration_package,
}) => {
  let alteredPolicy;
  switch (alteration_hook_key) {
    case 'KEY':
      alteredPolicy = new AlteredPolicy({
        package_name: policy.package_name,
        sum_assured: policy.sum_assured,
        base_premium: policy.monthly_premium,
        monthly_premium: policy.monthly_premium,
        module: alteration_package.module,
        end_date: policy.end_date,
        start_date: policy.start_date,
      });
      return alteredPolicy;
    default:
      throw new Error(`Invalid alteration hook key "${alteration_hook_key}"`);
  }
};
