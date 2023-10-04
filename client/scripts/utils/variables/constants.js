const STYLE_CLASSES = Object.freeze({
  HIDDEN: 'hidden',
  ALERT_ACCESS_DENIED: 'access-denied-alert',
  ALERT_TEXT: 'alert-text',
  ALERT_BUTTON: 'alert-button',
});

const ELEMENTS_IDS = Object.freeze({
  LOGOUT_NAV_BUTTON: 'logout-btn',
  TACTICS_NAV_BUTTON: 'tactics-btn',
  ANN_NAV_BUTTON: 'announcements-btn',
  LOGIN_NAV_BUTTON: 'login-btn',
  REGISTER_NAV_BUTTON: 'register-btn',
  FORM_SUBMIT_BUTTON: 'form-submit',
  PAGE_ALERT: 'page-alert',
});

JWT_ACCESS_TOKEN_NAME = 'jwtAccessToken';

ALERT_BUTTON_TEXT = 'Understood';

ALERT_MESSAGES = {
  ACCESS_DENIED: 'Entrance permitted only to Spartans who have been logged in.',
  INVALID_USERNAME_LENGTH: 'Username must contain at least 5 characters',
  INVALID_PASSWORD_LENGTH: 'Password must contain at least 5 characters',
  PASSWORDS_MISMATCH: 'Password fields does not match',
  LOGOUT_ERROR: 'The logout process has encountered an error',
};
