let clickedLogoTimeout;

async function loginUser() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    await postData('/auth/login', {
        username: username,
        password: password,
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
        .catch((e) => {
            alert('Incorrect username or password', e);
        });
}



function logoClickHandler() {
    soundEffect('cartoon-click');
    const logoElement = document.getElementById('logo-image');
    logoElement.classList.add('clicked');

    clearTimeout(clickedLogoTimeout);
    clickedLogoTimeout = setTimeout(() => {
        logoElement.classList.remove('clicked');
    }, 800);
}
