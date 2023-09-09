window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (isAuthenticated) return (window.location.href = '/');

  updateNavbarAuthState(false);
};

async function loginUser() {
  const username = document.getElementById('username-field').value;
  const password = document.getElementById('password-field').value;

  await postData('/auth/login', {
    username,
    password,
  })
    .then((res) => {
      return res?.json();
    })
    .then((data) => {
      localStorage.setItem('successLoginUsername', username);
      localStorage.setItem('jwtAccessToken', data.accessToken);
      window.location.href = '/';
    })
    .catch(async (errorStatus) => {
      const isServerError = errorStatus === 500;
      const message = isServerError
        ? 'Server error'
        : 'Incorrect username or password';
      await showAlert({
        message,
        onClose: enableSubmitButton,
        onOpen: disableSubmitButton,
      });
    });
}
