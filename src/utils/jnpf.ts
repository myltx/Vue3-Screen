import CryptoJS from 'crypto-js';
function decryptString(str: any, cipherKey = '') {
  if (!str) return '';
  if (!cipherKey) cipherKey = 'EY8WePvjM5GGwQzn';
  const decryptedData = CryptoJS.AES.decrypt(str, CryptoJS.enc.Utf8.parse(cipherKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
  return decryptedData;
}
export default decryptString;
