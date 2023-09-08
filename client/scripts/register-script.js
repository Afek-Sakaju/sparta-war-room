window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (isAuthenticated) {
    window.location.href = '/';
    return;
  }

  await updateNavbarAuthState(false);
};

async function registerUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const retypePassword = document.getElementById('re-password').value;

  if (username.length < 5) {
    disableSubmitButton();
    return await showAlert({
      message: 'Username must contain at least 5 characters',
      onClose: enableSubmitButton,
    });
  }

  if (password.length < 5) {
    disableSubmitButton();
    return await showAlert({
      message: 'Password must contain at least 5 characters',
      onClose: enableSubmitButton,
    });
  }

  if (password !== retypePassword) {
    disableSubmitButton();
    return await showAlert({
      message: 'Password fields does not match',
      onClose: enableSubmitButton,
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
      disableSubmitButton();
      await showAlert({
        message,
        onClose: enableSubmitButton,
      });
    });
}
