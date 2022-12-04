async function postData(url, data) {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) return response;
            throw Error(response.statusText);
        })
        .then((res) => {
            if (res.redirected) {
                window.location.href = res.url;
            }
            return res;
        });
}

function removeClass(waitBeforeAction = 2, elementId, className) {
    const element = document.getElementById(elementId);

    setTimeout(() => {
        element.classList.remove(className);
    }, waitBeforeAction * 1000);
}