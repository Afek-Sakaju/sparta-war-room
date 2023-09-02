window.onload = async () => {
  const accessToken = localStorage.getItem('jwtAccessToken');
  if (!accessToken) {
    window.location.href = '/login';
    return;
  }

  getData('/auth/user-authenticated')
    .then(() => {})
    .catch(() => {
      localStorage.removeItem('jwtAccessToken');
      alert('Not authorized');
      window.location.href = '/login';
    });

  const annData = await getData('/announcement/all')
    .then((d) => d.json())
    .catch((e) => console.error(e));

  const annListContainer = document.getElementById(
    'announcements-list-container'
  );

  annData?.forEach(({ title, description, announcer }) => {
    const annWrapper = document.createElement('div');
    annWrapper.classList.add('announcement-container');

    const annTitle = document.createElement('h3');
    annTitle.classList.add('announcement-title');
    annTitle.textContent = title;
    annWrapper.appendChild(annTitle);

    const annDescription = document.createElement('p');
    annDescription.classList.add('announcement-text');
    annDescription.textContent = description;
    annWrapper.appendChild(annDescription);

    const annAnnouncer = document.createElement('p');
    annAnnouncer.classList.add('announcement-text', 'announcer-text');
    annAnnouncer.textContent = announcer;
    annWrapper.appendChild(annAnnouncer);

    annListContainer.appendChild(annWrapper);
  });

  document
    .getElementById('announcements-list-container')
    .classList.remove('hidden');
};

//const username = localStorage.getItem('successLoginUsername');
//document.getElementById(
//  'title'
//).innerHTML = `Welcome ${username}</br> you have joined our clan!`;

//async function logoutUser() {
//  getData('/auth/logout')
//    .catch(() => {})
//    .finally(() => {
//      window.location.href = '/login';
//      localStorage.removeItem('jwtAccessToken');
//    });
//}
