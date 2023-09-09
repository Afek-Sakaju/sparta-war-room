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
  const accessToken = localStorage.getItem('jwtAccessToken');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  const fetchedData = await fetch(url, {
    method: 'GET',
    headers,
  })
    .then((response) => {
      if (!response?.ok) throw Error(response.status);
      return response;
    })
    .catch((e) => console.error(e));

  return fetchedData;
}

async function isAuthenticatedUser() {
  const accessToken = localStorage.getItem('jwtAccessToken');

  let isAuth = false;
  if (accessToken) {
    isAuth = await getData('/auth/user-authenticated')
      .then((d) => {
        if (!d) throw Error('Token is not verified/it is expired');
        return true;
      })
      .catch(() => false);
  }

  return isAuth;
}

async function logoutUser() {
  await postData('/auth/logout')
    .then(() => {
      localStorage.removeItem('successLoginUsername');
      localStorage.removeItem('jwtAccessToken');
      window.location.href = '/';
    })
    .catch(async (e) => {
      console.error(e);
      await showAlert({
        message: 'The logout process has encountered an error',
      });
    });
}
