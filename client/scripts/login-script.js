let clickedLogoTimeout;

async function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  await postData('/auth/login', {
    username,
    password,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      localStorage.setItem('successLoginUsername', username);
      localStorage.setItem('jwtAccessToken', data.accessToken);
    })
    .then(() => {
      window.location.href = '/success';
    })
    .catch((errorStatus) => {
      const message =
        errorStatus === 500 ? 'Server error' : 'Incorrect username or password';
      alert(message);
    });
}

function logoClickHandler() {
  const soundName = clickedLogoTimeout ? 'shield-guard' : 'sword-swing';
  soundEffect(soundName);
  const logoElement = document.getElementById('logo-image');
  logoElement.classList.add('clicked');

  clearTimeout(clickedLogoTimeout);
  clickedLogoTimeout = setTimeout(() => {
    logoElement.classList.remove('clicked');
    clickedLogoTimeout = undefined;
  }, 800);
}
