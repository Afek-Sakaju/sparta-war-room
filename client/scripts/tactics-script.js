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

  tacticsData?.forEach(({ title, information, image }) => {
    const tacticWrapper = document.createElement('div');
    tacticWrapper.classList.add('tactic-container');

    const tacticTitle = document.createElement('h3');
    tacticTitle.classList.add('tactic-title');
    tacticTitle.textContent = title;
    tacticWrapper.appendChild(tacticTitle);

    const tacticImage = document.createElement('img');
    tacticImage.classList.add('tactic-image');
    tacticImage.src = `data:image/jpeg;base64,${image}`;
    tacticImage.alt = title;
    tacticWrapper.appendChild(tacticImage);

    const tacticDescription = document.createElement('p');
    tacticDescription.classList.add('tactic-text');

    // Match all periods except the last one
    const regex = /\.(?=.*\.)/g;
    const replacedInformation = information.replace(regex, '.\n\n');
    tacticDescription.textContent = replacedInformation;
    tacticWrapper.appendChild(tacticDescription);

    tacticsListContainer.appendChild(tacticWrapper);
  });

  tacticsListContainer.classList.remove('hidden');
};
