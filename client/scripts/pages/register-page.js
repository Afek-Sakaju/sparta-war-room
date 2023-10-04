window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (isAuthenticated) return (window.location.href = NAVIGATION_PATHS.ROOT);

  updateNavbarAuthState(false);
};

async function registerUser() {
  const username = document.getElementById(ELEMENTS_IDS.USERNAME_INPUT)?.value;
  const password = document.getElementById(ELEMENTS_IDS.PASSWORD_INPUT)?.value;
  const retypePassword = document.getElementById(
    ELEMENTS_IDS.CONFIRM_PASSWORD_INPUT
  )?.value;

  if (username?.length < 5) {
    return await showAlert({
      message: ALERT_MESSAGES.USERNAME_CHARS_VALIDATION,
      onClose: setSubmitButtonState,
      onOpen: () => setSubmitButtonState(true),
    });
  }

  if (password?.length < 5) {
    return await showAlert({
      message: ALERT_MESSAGES.INVALID_PASSWORD_LENGTH,
      onClose: setSubmitButtonState,
      onOpen: () => setSubmitButtonState(true),
    });
  }

  if (password !== retypePassword) {
    return await showAlert({
      message: ALERT_MESSAGES.PASSWORDS_MISMATCH,
      onClose: setSubmitButtonState,
      onOpen: () => setSubmitButtonState(true),
    });
  }

  await postData(API_URLS.AUTH_REGISTER, {
    username,
    password,
  })
    .then(() => {
      window.location.href = NAVIGATION_PATHS.LOGIN;
    })
    .catch(async (errorStatus) => {
      const message =
        errorStatus === 500
          ? ERROR_MESSAGES.SERVER_ERROR
          : ERROR_MESSAGES.USERNAME_TAKEN;
      await showAlert({
        message,
        onClose: setSubmitButtonState,
        onOpen: () => setSubmitButtonState(true),
      });
    });
}
