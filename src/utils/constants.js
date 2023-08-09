export const GLOBAL_URL = "https://itinformatix.org:3040";

export const RAGEX = {
  AadharRegex: new RegExp(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/),
  panRegex: new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/),
  emailRegex: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  phoneNumRegex: new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/),
  emailOrPhone: new RegExp(/^(.+@.+|\d{10})$/),
  mobilenumRegex: new RegExp(/^[6-9]{1}[0-9]{9}$/),
  accountnumRegex: new RegExp(/^\d{9,18}$/),
  ifscRegex: new RegExp(/^[A-Z]{4}0[A-Z0-9]{6}$/),
  specialCharacters: new RegExp(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/),
  alphaNumeric: new RegExp(/^[A-Za-z0-9\s]*$/),
  nameRegex: new RegExp(/^([a-zA-Z]+\s)*[a-zA-Z]+$/),
  passwordRegex: new RegExp(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  ),
};
