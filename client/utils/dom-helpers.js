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

function showAlert() {
  const customAlert = document.getElementById('alert-container');
  customAlert?.classList?.remove('hidden');
}

function hideAlert() {
  const customAlert = document.getElementById('alert-container');
  customAlert?.classList?.add('hidden');
}
