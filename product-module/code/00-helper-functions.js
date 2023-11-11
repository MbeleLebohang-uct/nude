/**
 * Calculates the age of a member from their date of birth
 * @param {string} dateOfBirth ISO date of birth of the member
 * @param {string} dateForAge Date from which to check their age, defaults to today if notihing entered
 * @returns {number} Age
 */
const getAgeFromDateOfBirth = (dateOfBirth, dateForAge = moment().format()) => {
  return moment(dateForAge).diff(moment(dateOfBirth), 'years');
};

/**
 * Sums an array of intergers
 * @param {number[]} n Array of integers to be added
 * @returns {number} Accumulated total
 */
const sum = (n) => n.reduce((acc, curr) => acc + curr, 0);

/**
 * Sums a value of an object in an array of objects. This uses a valueGetter to access the object value
 * @param {Object[]} objects Array of objects with values to be added
 * @param {Object} valueGetter A callback function to get the value from the object
 * @returns {number} Accumulated total
 */
const sumObjectsValue = (objects, valueGetter) =>
  objects.reduce((total, item) => total + valueGetter(item), 0);

/**
 * Clamp a number in between range [min, max]
 * @param {number} x A number to clamp
 * @param {number} min Lower bound of the clamp limit
 * @param {number} max Upper bound of the clamp limit
 * @returns {number} A clamped number
 */
const clamp = (x, min, max) => Math.max(min, Math.min(x, max));

/**
 * Get device seed given device ID
 * @param {string} deviceId deviceId
 * @returns {number} seed
 */
const getDeviceSeed = (deviceId) => {
  let hash = 0;
  if (deviceId.length === 0) return hash;

  for (let i = 0; i < deviceId.length; i++) {
    const char = deviceId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
}

/**
 * Get device factor given device ID
 * @param {string} deviceId deviceId
 * @returns {number} factor should be a number in rance [0, 1]
 */
const getDeviceFactor = (deviceId) => {
  let seed = getDeviceSeed(deviceId);
  const factor = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  return factor();
}

/**
 * Get device factor given device ID
 * @param {number} deviceCount number of devices to insure
 * @param {number} minBaseRate minimum base rate
 * @param {number} maxBaseRate maximum base rate
 * @returns {number} Base rate for a given number of devices in range [minbaseRate, maxBaseRate]
 */
const getBaseRate = (deviceCount, minBaseRate, maxBaseRate) => {
  const range = maxBaseRate - minBaseRate;
  return (deviceCount % (range + 1)) + minBaseRate;
}

/**
 * Build module data given user input
 * @param {Record<string, any>} device validated device input data
 * @param {number} baseRate the base rate
 * @param {string} dateOfBith main member date of birth
 * @param {number} sumAssured sum assured amount
 * @param {number} axcessAmount axcess amount
 * @returns {Record<string, any>} device module data
 */
const getDeviceModuleData = (device, baseRate, dateOfBith, sumAssured, axcessAmount) => {
  const age = getAgeFromDateOfBirth(dateOfBith);
  const ageFactor = 1/clamp((Math.log10(age + 1)), 1, (Math.log10(age + 1)));

  const deviceGeographicalFactor = device.worldwide_cover
    ? GEOGRAPHICAL_FACTORS_BY_PROVINCE.worldwide
    : GEOGRAPHICAL_FACTORS_BY_PROVINCE[device.province];

  const brandFactor = device.brand === 'Other' 
    ? OTHER_BRAND.brand_factor
    : BRAND_FACTORS.filter((brandFactor) => brandFactor.brand === device.brand)[0].brand_factor;

  const modelFactor = device.model === 'Other' 
    ? getDeviceFactor(OTHER_DEVICE.product.id)
    : getDeviceFactor(DEVICES.filter((properties) => properties.product.model === device.model)[0].product.id);
  
  const deviceInfoFactorProduct = brandFactor*modelFactor;
  const deviceInfoFactor = (Math.sin((Math.PI*deviceInfoFactorProduct)/2) + 1)/2;

  const usageFactor = USAGE_FACTORS[device.device_usage];

  const premiumWithoutAxcessFactor = deviceGeographicalFactor*deviceInfoFactor*usageFactor*ageFactor*device.value_amount;
  
  const deviceAccessAmount =  axcessAmount*(device.value_amount/sumAssured);
  const axcessFactorExponent = ((-1*Math.PI*deviceAccessAmount)/(deviceAccessAmount + device.value_amount));
  const axcessFactor = Math.pow(2*Math.E, axcessFactorExponent) - 0.5;

  const premium = premiumWithoutAxcessFactor * (1 + clamp(axcessFactor, 0, 1));

  return {
    ...device,
    uuid: device.uuid ? device.uuid : createUuid(),
    axcess_amount: Math.round(deviceAccessAmount),
    base_premium_amount: baseRate,
    premium_amount: Math.round(clamp(premium, baseRate, premium))
  };
}

/**
 * Build module data given user input
 * @param {Record<string, any>} data validated input data
 * @returns {Record<string, any>} module data
 */
const buildModuleData = (data) => {
  const baseRate = getBaseRate(data.devices.length, MIN_BASE_RATE, MAX_BASE_RATE);
  const sumAssured = sumObjectsValue(data.devices, (device) => device.value_amount);

  return {
    auto_renew: true,
    ...data,
    devices: data.devices.map(
      (device) => getDeviceModuleData(
        device, 
        baseRate, 
        data.date_of_birth, 
        sumAssured, 
        data.axcess_amount
      )
    )
  }
}
