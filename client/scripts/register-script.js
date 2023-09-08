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
    return showAlert('Username must contain at least 5 characters', 4);
  }

  if (password.length < 5) {
    return showAlert('Password must contain at least 5 characters', 4);
  }

  if (password !== retypePassword) {
    return showAlert('Password fields does not match', 4);
  }

  await postData('/auth/register', {
    username,
    password,
  })
    .then(() => {
      window.location.href = '/login';
    })
    .catch((errorStatus) => {
      const message =
        errorStatus === 500 ? 'Server error' : 'Username already exists';
      showAlert(message, 4);
    });
}
