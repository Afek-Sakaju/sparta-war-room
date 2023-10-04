window.onload = async () => {
  const isAuthenticated = await isAuthenticatedUser();
  if (!isAuthenticated) {
    await showAlert({
      message: ALERT_MESSAGES.ACCESS_DENIED,
      alertButtonProperties: {
        text: ALERT_BUTTON_TEXT,
        href: NAVIGATION_PATHS.LOGIN,
      },
      isAccessDeniedAlert: true,
      displayDuration: 2,
      delayDisplayDuration: 0.1,
      onClose: () => {
        window.location.href = NAVIGATION_PATHS.LOGIN;
      },
    });

    localStorage.removeItem(JWT_ACCESS_TOKEN_NAME);
    return updateNavbarAuthState(false);
  }

  updateNavbarAuthState(true);
  try {
    const tacticsListContainer = document.getElementById(
      ELEMENTS_IDS.TACTICS_PANEL
    );
    if (!tacticsListContainer) return;

    const tacticsResponse = await getData(API_URLS.GET_ALL_TACTICS);
    if (!tacticsResponse) {
      throw Error(ERROR_MESSAGES.TACTICS_DATA_FETCH_ERROR);
    }

    const tacticsData = await tacticsResponse?.json();
    tacticsData?.forEach(({ title, information, image }) => {
      const tacticWrapper = document.createElement('div');
      tacticWrapper.classList.add(STYLE_CLASSES.TACTIC_CONTAINER);

      const tacticTitle = document.createElement('h3');
      tacticTitle.classList.add(STYLE_CLASSES.TACTIC_TITLE);
      tacticTitle.textContent = title;
      tacticWrapper.appendChild(tacticTitle);

      const tacticImage = document.createElement('img');
      tacticImage.classList.add(STYLE_CLASSES.TACTIC_IMAGE);
      tacticImage.src = `data:image/jpeg;base64,${image}`;
      tacticImage.alt = title;
      tacticWrapper.appendChild(tacticImage);

      const tacticDescription = document.createElement('p');
      tacticDescription.classList.add(STYLE_CLASSES.TACTIC_TEXT);

      const replacedTacticInformation = addLineBreaksToText(information, 2);
      tacticDescription.textContent = replacedTacticInformation;
      tacticWrapper.appendChild(tacticDescription);

      tacticsListContainer.appendChild(tacticWrapper);
      unhideElements(ELEMENTS_IDS.TACTICS_PANEL);
    });
  } catch (e) {
    const message = e?.message ?? ERROR_MESSAGES.DEFAULT_DATA_RETRIEVE_ERROR;
    console.error(e);
    await showAlert({ message });
  }
};
