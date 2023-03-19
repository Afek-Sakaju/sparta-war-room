async function postData(url, data) {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) return response;
        throw response.status;
    });
}

async function getData(url) {
    const accessToken = localStorage.getItem('jwtAccessToken');

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken && { Authorization: 'Bearer ' + accessToken }),
        },
    }).then((response) => {
        if (response.ok) return response;
        throw Error(response.status);
    });
}

function soundEffect(name) {
    new Audio(`../assets/sounds/${name}.mp3`).play();
}
