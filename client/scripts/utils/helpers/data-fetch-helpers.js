async function postData(url, data) {
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response?.ok) throw Error(response.status);
      return response;
    })
    .catch((e) => console.error(e));
}

async function getData(url) {
  const accessToken = localStorage.getItem(JWT_ACCESS_TOKEN_NAME);
  const bearerToken = createBearerTokenString(accessToken);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: bearerToken,
  };

  const fetchedData = await fetch(url, {
    method: 'GET',
    headers,
  })
    .then((response) => {
      if (!response || !response?.ok) throw Error(response.status);
      return response;
    })
    .catch((e) => console.error(e));

  return fetchedData;
}

async function isAuthenticatedUser() {
  const accessToken = localStorage.getItem(JWT_ACCESS_TOKEN_NAME);

  let isAuth = false;
  if (accessToken) {
    isAuth = await getData(API_URLS.IS_AUTH)
      .then((d) => {
        if (!d) throw Error(ERROR_MESSAGES.TOKEN_UNVERIFIED);
        return true;
      })
      .catch(() => false);
  }

  return isAuth;
}

async function logoutUser() {
  await postData(API_URLS.AUTH_LOGOUT)
    .then(() => {
      localStorage.removeItem(JWT_ACCESS_TOKEN_NAME);
      window.location.href = NAVIGATION_PATHS.ROOT;
    })
    .catch(async (e) => {
      console.error(e);
      await showAlert({
        message: ALERT_MESSAGES.LOGOUT_ERROR,
      });
    });
}
