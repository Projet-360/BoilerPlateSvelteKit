const EMAIL_EXIST = "This email already exists";
const USERNAME_REQUIRED = "Username is required";
const VALID_USERNAME = "Username must be between 3 and 20 characters";
const VALID_EMAIL = "The email is not valid";
const NUMBE_CARAC_PASSWORD = "The password must have at least 8 characters";
const MIN_PASSWORD = "The password must contain at least one lowercase letter";
const MAJ_PASSWORD = "The password must contain at least one uppercase letter";
const NUMBER_PASSWORD = "The password must contain at least one number";
const SPECIAL_CARAC_PASSWORD = "The password must contain at least one special character";
const INVALID_CREDENTIALS = "wrong identifiants";
const RATE_LIMIT = "Too many connection attempts, please try again later";
const EMAIL_NOT_VERIFIED = "Your Email has not been verified, please check your mailbox";
const EMAIL_VERIFIED = "Your Email has been verified";
const SUCCESS_INSCRIPTION = "you received an email to validate your account";
const SUCCESS_LOGIN = "Welcome !";
const USER_NOT_FOUND = "User not found";
const EMAIL_FORGOT_PASSWORD = "Email sent to reset your forgot password";
const FORGOT_PASSWORD_INVALID = "Passwords do not match";
const VALIDATION_FORGOT_PASSWORD = "Your password has been successfully updated";
const ACCESS_DENIED = "Access denied";
const NAME_MIN_MAX_CARAC = "The name must be between 5 and 50 characters long.";
const NAME_REQUIRED = "The name field is required.";
const MESSAGE_MIN_MAX_CARAC = "The message must be between 10 and 500 characters long.";
const MESSAGE_REQUIRED = "The message field is required.";
const validation = {
  EMAIL_EXIST,
  USERNAME_REQUIRED,
  VALID_USERNAME,
  VALID_EMAIL,
  NUMBE_CARAC_PASSWORD,
  MIN_PASSWORD,
  MAJ_PASSWORD,
  NUMBER_PASSWORD,
  SPECIAL_CARAC_PASSWORD,
  INVALID_CREDENTIALS,
  RATE_LIMIT,
  EMAIL_NOT_VERIFIED,
  EMAIL_VERIFIED,
  SUCCESS_INSCRIPTION,
  SUCCESS_LOGIN,
  USER_NOT_FOUND,
  EMAIL_FORGOT_PASSWORD,
  FORGOT_PASSWORD_INVALID,
  VALIDATION_FORGOT_PASSWORD,
  ACCESS_DENIED,
  NAME_MIN_MAX_CARAC,
  NAME_REQUIRED,
  MESSAGE_MIN_MAX_CARAC,
  MESSAGE_REQUIRED
};
export {
  ACCESS_DENIED,
  EMAIL_EXIST,
  EMAIL_FORGOT_PASSWORD,
  EMAIL_NOT_VERIFIED,
  EMAIL_VERIFIED,
  FORGOT_PASSWORD_INVALID,
  INVALID_CREDENTIALS,
  MAJ_PASSWORD,
  MESSAGE_MIN_MAX_CARAC,
  MESSAGE_REQUIRED,
  MIN_PASSWORD,
  NAME_MIN_MAX_CARAC,
  NAME_REQUIRED,
  NUMBER_PASSWORD,
  NUMBE_CARAC_PASSWORD,
  RATE_LIMIT,
  SPECIAL_CARAC_PASSWORD,
  SUCCESS_INSCRIPTION,
  SUCCESS_LOGIN,
  USERNAME_REQUIRED,
  USER_NOT_FOUND,
  VALIDATION_FORGOT_PASSWORD,
  VALID_EMAIL,
  VALID_USERNAME,
  validation as default
};
