window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (isAuthenticated) return (window.location.href = NAVIGATION_PATHS.ROOT);

  updateNavbarAuthState(false);
};

async function loginUser() {
  const username = document.getElementById(ELEMENTS_IDS.USERNAME_INPUT).value;
  const password = document.getElementById(ELEMENTS_IDS.PASSWORD_INPUT).value;

  await postData(API_URLS.AUTH_LOGIN, {
    username,
    password,
  })
    .then((res) => {
      return res?.json();
    })
    .then((data) => {
      localStorage.setItem(JWT_ACCESS_TOKEN_NAME, data.accessToken);
      window.location.href = NAVIGATION_PATHS.ROOT;
    })
    .catch(async (errorStatus) => {
      const isServerError = errorStatus === 500;
      const message = isServerError
        ? ERROR_MESSAGES.SERVER_ERROR
        : ERROR_MESSAGES.INCORRECT_LOGIN_DATA;
      await showAlert({
        message,
        onClose: setSubmitButtonState,
        onOpen: () => setSubmitButtonState(true),
      });
    });
}
