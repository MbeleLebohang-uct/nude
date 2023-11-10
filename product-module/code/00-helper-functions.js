// 00-helper-functions
/**
 * Calculates the age of a member from their date of birth
 * @param {string} dateOfBirth ISO date of birth of the member
 * @param {string} dateForAge Date from which to check their age, defaults to today if notihing entered
 * @returns {number} Age
 */
const getAgeFromDateOfBirth = (dateOfBirth, dateForAge = moment().format()) => {
  return moment(dateForAge).diff(moment(dateOfBirth), 'years');
};

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

const getDeviceFactor = (deviceId) => {
  let seed = getDeviceSeed(deviceId);
  const factor = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  return factor();
}
