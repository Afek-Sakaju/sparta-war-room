window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (isAuthenticated) return (window.location.href = '/');

  updateNavbarAuthState(false);
};

async function registerUser() {
  const username = document.getElementById('username-field')?.value;
  const password = document.getElementById('password-field')?.value;
  const retypePassword = document.getElementById(
    'confirm-password-field'
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
      message: ALERT_MESSAGES.PASSWORDS_MISMATCH ,
      onClose: setSubmitButtonState,
      onOpen: () => setSubmitButtonState(true),
    });
  }

  await postData('/auth/register', {
    username,
    password,
  })
    .then(() => {
      window.location.href = '/login';
    })
    .catch(async (errorStatus) => {
      const message =
        errorStatus === 500 ? 'Server error' : 'Username already exists';
      await showAlert({
        message,
        onClose: setSubmitButtonState,
        onOpen: () => setSubmitButtonState(true),
      });
    });
}
