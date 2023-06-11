window.onload = () => {
    soundEffect('medieval-success');

    const accessToken = localStorage.getItem('jwtAccessToken');
    if (!accessToken) window.location.href = '/login';

    getData('/auth/user-authenticated').catch(() => {
        localStorage.removeItem('jwtAccessToken');
        alert('Not authorized');
        window.location.href = '/login';
    });

    const username = localStorage.getItem('successLoginUsername');
    document.getElementById(
        'title'
    ).innerHTML = `Welcome ${username}</br> you have joined our clan!`;
};

async function logoutUser() {
    getData('/auth/logout')
        .catch(() => {})
        .finally(() => {
            window.location.href = '/login';
            localStorage.removeItem('jwtAccessToken');
        });
}
