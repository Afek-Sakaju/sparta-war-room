window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (!isAuthenticated) {
    await showAlert({
      message: ALERT_MESSAGES.ACCESS_DENIED,
      alertButtonProperties: { text: ALERT_BUTTON_TEXT, href: '/login' },
      isAccessDeniedAlert: true,
      displayDuration: 2,
      delayDisplayDuration: 0.1,
      onClose: () => {
        window.location.href = '/login';
      },
    });

    localStorage.removeItem(JWT_ACCESS_TOKEN_NAME);
    return updateNavbarAuthState(false);
  }

  updateNavbarAuthState(true);
  try {
    const tacticsListContainer = document.getElementById('tactics-panel');
    if (!tacticsListContainer) return;

    const tacticsResponse = await getData('/tactics/all');
    if (!tacticsResponse) {
      throw Error('There was an issue fetching tactics data.');
    }

    const tacticsData = await tacticsResponse?.json();
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
      unhideElements('tactics-panel');
    });
  } catch (e) {
    const message = e?.message ?? 'Server data retrieval issue.';
    console.error(e);
    await showAlert({ message });
  }
};
