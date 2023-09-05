window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (!isAuthenticated) {
    alert('Entrance permitted only to Spartans who have logged in.');
    window.location.href = '/login';
    localStorage.removeItem('jwtAccessToken');
    return;
  }

  document.getElementById('logout-button').classList.remove('hidden');
  document
    .getElementById('announcements-list-container')
    .classList.remove('hidden');
		
  const annData = await getData('/announcements/all')
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

    const replacedAnnDescription = addLineBreaksToText(description);
    annDescription.textContent = replacedAnnDescription;
    annWrapper.appendChild(annDescription);

    const annAnnouncer = document.createElement('p');
    annAnnouncer.classList.add('announcement-text', 'announcer-text');
    annAnnouncer.textContent = announcer;
    annWrapper.appendChild(annAnnouncer);

    annListContainer.appendChild(annWrapper);
  });
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
