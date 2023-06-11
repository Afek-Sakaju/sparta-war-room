async function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const retypePassword = document.getElementById('re-password').value;

    if (password.length < 5) {
        return alert('Password must contain at least 5 characters');
    }

    if (password !== retypePassword)
        return alert('Password fields does not match');

    await postData('/auth/register', {
        username: username,
        password: password,
    })
        .then(() => {
            window.location.href = '/login';
        })
        .catch((errorStatus) => {
            const message =
                errorStatus === 500
                    ? 'Server error'
                    : 'Username already exists';
            alert(message);
        });
}
