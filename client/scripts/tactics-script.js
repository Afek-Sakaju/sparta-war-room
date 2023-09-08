window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (!isAuthenticated) {
    await wait(0.1);
    showAlert({
      message: 'Entrance permitted only to Spartans who have been logged in.',
      alertButtonProperties: { text: 'Understood', href: '/login' },
    });
    await updateNavbarAuthState(false);
    await wait(2);
    window.location.href = '/login';
    localStorage.removeItem('jwtAccessToken');
    return;
  }

  await updateNavbarAuthState(true);
  unhideElements('tactics-list-container');

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

    const replacedTacticInformation = addLineBreaksToText(information, 2);
    tacticDescription.textContent = replacedTacticInformation;
    tacticWrapper.appendChild(tacticDescription);

    tacticsListContainer.appendChild(tacticWrapper);
  });
};
