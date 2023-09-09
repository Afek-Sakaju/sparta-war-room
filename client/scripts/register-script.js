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
      message: 'Username must contain at least 5 characters',
      onClose: enableSubmitButton,
      onOpen: disableSubmitButton,
    });
  }

  if (password?.length < 5) {
    return await showAlert({
      message: 'Password must contain at least 5 characters',
      onClose: enableSubmitButton,
      onOpen: disableSubmitButton,
    });
  }

  if (password !== retypePassword) {
    return await showAlert({
      message: 'Password fields does not match',
      onClose: enableSubmitButton,
      onOpen: disableSubmitButton,
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
        onClose: enableSubmitButton,
        onOpen: disableSubmitButton,
      });
    });
}
