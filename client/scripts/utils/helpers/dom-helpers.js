function hideElements(elementsIds) {
  if (!(elementsIds instanceof Array)) elementsIds = [elementsIds];

  elementsIds?.forEach((id) => {
    const element = document.getElementById(id);
    element?.classList?.add(STYLE_CLASSES.HIDDEN);
  });
}

function unhideElements(elementsIds) {
  if (!(elementsIds instanceof Array)) elementsIds = [elementsIds];

  elementsIds?.forEach((id) => {
    const element = document.getElementById(id);
    element?.classList?.remove(STYLE_CLASSES.HIDDEN);
  });
}

/* 'isAlreadyAuth' variable is used to call this function and avoid re-executing 
of the 'isAuthenticatedUser' logic once the authentication status is already known. */
async function updateNavbarAuthState(isAlreadyAuth) {
  const isAuth = !!isAlreadyAuth ? isAlreadyAuth : await isAuthenticatedUser();

  const authElementsToUnhide = [
    ELEMENTS_IDS.LOGOUT_NAV_BUTTON,
    ELEMENTS_IDS.TACTICS_NAV_BUTTON,
    ELEMENTS_IDS.ANN_NAV_BUTTON,
  ];
  const notAuthElementsToUnhide = [
    ELEMENTS_IDS.LOGIN_NAV_BUTTON,
    ELEMENTS_IDS.REGISTER_NAV_BUTTON,
  ];

  if (isAuth) unhideElements(authElementsToUnhide);
  else unhideElements(notAuthElementsToUnhide);
}

async function showAlert({
  message,
  isAccessDeniedAlert,
  alertButtonProperties,
  displayDuration = 3,
  displayPermanent,
  delayDisplayDuration,
  onClose,
  onOpen,
}) {
  const alertContainer = document.getElementById(ELEMENTS_IDS.PAGE_ALERT);
  if (isAlertActive || !alertContainer) return;

  if (delayDisplayDuration) await wait(delayDisplayDuration);

  alertContainer.classList.toggle(
    STYLE_CLASSES.ALERT_ACCESS_DENIED,
    !!isAccessDeniedAlert
  );

  const alertText = document.createElement('span');
  alertText.classList.add(STYLE_CLASSES.ALERT_TEXT);
  alertText.textContent = message;
  alertContainer.appendChild(alertText);

  if (alertButtonProperties) {
    const { text, href = NAVIGATION_PATHS.ROOT } = alertButtonProperties;
    const alertButton = document.createElement('a');

    alertButton.classList.add(STYLE_CLASSES.ALERT_BUTTON);
    alertButton.textContent = text;
    alertButton.href = href;
    alertContainer.appendChild(alertButton);
  }

  alertContainer.classList.remove(STYLE_CLASSES.HIDDEN);
  isAlertActive = true;
  onOpen?.();

  if (!displayPermanent) {
    setTimeout(() => {
      hideAlert();
      onClose?.();
    }, displayDuration * 1000);
  }
}

function hideAlert() {
  const alertContainer = document.getElementById(ELEMENTS_IDS.PAGE_ALERT);
  if (!isAlertActive || !alertContainer) return;

  alertContainer.classList.add(STYLE_CLASSES.HIDDEN);
  alertContainer.innerHTML = '';
  isAlertActive = false;
}

function setSubmitButtonState(disabled) {
  const submitButton = document.getElementById(ELEMENTS_IDS.FORM_SUBMIT_BUTTON);
  if (!submitButton) return;

  submitButton.disabled = disabled;
}
