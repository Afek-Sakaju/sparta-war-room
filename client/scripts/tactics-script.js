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

  const tacticsData = await getData('/tactics/all')
    .then((d) => d.json())
    .catch((e) => console.error(e));

  const tacticsListContainer = document.getElementById(
    'tactics-list-container'
  );

  tacticsData?.forEach(({ title, information }) => {
    const tacticWrapper = document.createElement('div');
    tacticWrapper.classList.add('tactics-container');

    const tacticTitle = document.createElement('h3');
    tacticTitle.classList.add('tactics-title');
    tacticTitle.textContent = title;
    tacticWrapper.appendChild(tacticTitle);

    const tacticDescription = document.createElement('p');
    tacticDescription.classList.add('tactics-text');
    tacticDescription.textContent = information;
    tacticWrapper.appendChild(tacticDescription);

    tacticsListContainer.appendChild(tacticWrapper);
  });

  tacticsListContainer.classList.remove('hidden');
};
