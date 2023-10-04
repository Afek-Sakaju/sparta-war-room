const STYLE_CLASSES = Object.freeze({
  HIDDEN: 'hidden',
  ALERT_ACCESS_DENIED: 'access-denied-alert',
  ALERT_TEXT: 'alert-text',
  ALERT_BUTTON: 'alert-button',
  ANN_CONTAINER: 'announcement-container',
  ANN_TITLE: 'announcement-title',
  ANN_TEXT: 'announcement-text',
  ANN_ANNOUNCER_TEXT: 'announcer-text',
  TACTIC_CONTAINER: 'tactic-container',
  TACTIC_TITLE: 'tactic-title',
  TACTIC_IMAGE: 'tactic-image',
  TACTIC_TEXT: 'tactic-text',
});

const ELEMENTS_IDS = Object.freeze({
  LOGOUT_NAV_BUTTON: 'logout-btn',
  TACTICS_NAV_BUTTON: 'tactics-btn',
  ANN_NAV_BUTTON: 'announcements-btn',
  LOGIN_NAV_BUTTON: 'login-btn',
  REGISTER_NAV_BUTTON: 'register-btn',
  FORM_SUBMIT_BUTTON: 'form-submit',
  PAGE_ALERT: 'page-alert',
  ANN_PANEL: 'announcements-panel',
  USERNAME_INPUT: 'username-field',
  PASSWORD_INPUT: 'password-field',
  CONFIRM_PASSWORD_INPUT: 'confirm-password-field',
  TACTICS_PANEL: 'tactics-panel',
});

ALERT_MESSAGES = Object.freeze({
  ACCESS_DENIED: 'Entrance permitted only to Spartans who have been logged in.',
  INVALID_USERNAME_LENGTH: 'Username must contain at least 5 characters',
  INVALID_PASSWORD_LENGTH: 'Password must contain at least 5 characters',
  PASSWORDS_MISMATCH: 'Password fields does not match',
  LOGOUT_ERROR: 'The logout process has encountered an error',
});

ERROR_MESSAGES = Object.freeze({
  TACTICS_DATA_FETCH_ERROR: 'There was an issue fetching tactics data.',
  TOKEN_UNVERIFIED: 'Token is not verified/it is expired',
  DEFAULT_DATA_RETRIEVE_ERROR: 'Server data retrieval issue.',
  SERVER_ERROR: 'Server error',
  INCORRECT_LOGIN_DATA: 'Incorrect username or password',
  USERNAME_TAKEN: 'Username already exists',
});

NAVIGATION_PATHS = Object.freeze({
  LOGIN: '/login',
  ROOT: '/',
});

API_URLS = Object.freeze({
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_LOGOUT: '/auth/logout',
  IS_AUTH: '/auth/user-authenticated',
  GET_ALL_TACTICS: '/tactics/all',
  GET_ALL_ANNS: '/announcements/all',
});
// API_URLS.AUTH_LOGIN
ALERT_BUTTON_TEXT = 'Understood';

JWT_ACCESS_TOKEN_NAME = 'jwtAccessToken';
