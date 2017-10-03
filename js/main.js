(function () {
  const KEY_CODE_LEFT = 37;
  const KEY_CODE_RIGHT = 39;

  const mainElement = document.querySelector(`.central`);
  const templatesIds = [`#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`];
  const templates = templatesIds.map((id) => document.querySelector(id));
  let templateNumber = -1;

  const showWindow = function (number) {
    const newElement = templates[number].content.cloneNode(true);

    mainElement.innerHTML = ``;
    mainElement.appendChild(newElement);
  };

  document.addEventListener(`keydown`, function (evt) {
    if (evt.altKey && evt.keyCode === KEY_CODE_RIGHT) {
      if (templateNumber >= -1 && templateNumber < templates.length - 1) {
        templateNumber++;
        showWindow(templateNumber);
      }
    }

    if (evt.altKey && evt.keyCode === KEY_CODE_LEFT) {
      if (templateNumber > 0) {
        templateNumber--;
        showWindow(templateNumber);
      } else if (templateNumber === -1) {
        return;
      }
    }
  });
})();
