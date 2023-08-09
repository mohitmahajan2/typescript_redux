import CryptoJS from "crypto-js";
const secret = "$s45Ddrg*6^6h*sweg%";

export const encryptData = (data) =>
CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString();

export const decryptData = (value) => CryptoJS.AES.decrypt(value, secret);

export const getUTFStr = (value) => value.toString(CryptoJS.enc.Utf8);
