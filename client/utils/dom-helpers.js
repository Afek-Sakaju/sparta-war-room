function soundEffect(name) {
  new Audio(`../assets/sounds/${name}.mp3`).play();
}

function hideElements(elementsIds) {
  if (!(elementsIds instanceof Array)) elementsIds = [elementsIds];

  elementsIds?.forEach((id) => {
    const element = document.getElementById(id);
    element?.classList?.add('hidden');
  });
}

function unhideElements(elementsIds) {
  if (!(elementsIds instanceof Array)) elementsIds = [elementsIds];

  elementsIds?.forEach((id) => {
    const element = document.getElementById(id);
    element?.classList?.remove('hidden');
  });
}

/* 'isAlreadyAuth' variable is used to call this function and avoid re-executing 
of the 'isAuthenticatedUser' logic once the authentication status is already known. */
async function updateNavbarAuthState(isAlreadyAuth) {
  const isAuth =
    isAlreadyAuth === undefined ? await isAuthenticatedUser() : isAlreadyAuth;

  const authElementsToUnhide = [
    'logout-button',
    'tactics-button',
    'announcements-button',
  ];
  const notAuthElementsToUnhide = ['login-button', 'register-button'];

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
  const alertContainer = document.getElementById('alert-container');
  if (isAlertActive || !alertContainer) return;

  if (delayDisplayDuration) await wait(delayDisplayDuration);

  alertContainer.classList.toggle('access-denied-alert', !!isAccessDeniedAlert);

  const alertText = document.createElement('span');
  alertText.classList.add('alert-text');
  alertText.textContent = message;
  alertContainer.appendChild(alertText);

  if (alertButtonProperties) {
    const { text = 'Understood', href = '/' } = alertButtonProperties;
    const alertButton = document.createElement('a');

    alertButton.classList.add('alert-button');
    alertButton.textContent = text;
    alertButton.href = href;
    alertContainer.appendChild(alertButton);
  }

  alertContainer.classList.remove('hidden');
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
  const alertContainer = document.getElementById('alert-container');
  alertContainer?.classList?.add('hidden');
  alertContainer.innerHTML = '';
  isAlertActive = false;
}

function disableSubmitButton() {
  const submitButton = document.getElementById('submit-button');
  if (submitButton) submitButton.disabled = true;
}

function enableSubmitButton() {
  const submitButton = document.getElementById('submit-button');
  if (submitButton) submitButton.disabled = false;
}
