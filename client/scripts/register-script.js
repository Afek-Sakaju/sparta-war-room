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
    return await showAlert({
      message: 'Username must contain at least 5 characters',
      isFormAlert: true,
    });
  }

  if (password.length < 5) {
    return await showAlert({
      message: 'Password must contain at least 5 characters',
      isFormAlert: true,
    });
  }

  if (password !== retypePassword) {
    return await showAlert({
      message: 'Password fields does not match',
      isFormAlert: true,
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
        isFormAlert: true,
      });
    });
}
