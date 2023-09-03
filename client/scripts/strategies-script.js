window.onload = async () => {
  const accessToken = localStorage.getItem('jwtAccessToken');
  if (!accessToken) {
    alert('Not authorized');
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

  const strategiesData = await getData('/strategy/all')
    .then((d) => d.json())
    .catch((e) => console.error(e));

  debugger;
  const strategiesListContainer = document.getElementById(
    'strategies-list-container'
  );

  strategiesData?.forEach(({ title, information }) => {
    const annWrapper = document.createElement('div');
    annWrapper.classList.add('strategy-container');

    const annTitle = document.createElement('h3');
    annTitle.classList.add('strategy-title');
    annTitle.textContent = title;
    annWrapper.appendChild(annTitle);

    const annDescription = document.createElement('p');
    annDescription.classList.add('strategy-text');
    annDescription.textContent = information;
    annWrapper.appendChild(annDescription);

    strategiesListContainer.appendChild(annWrapper);
  });

  strategiesListContainer.classList.remove('hidden');
};
