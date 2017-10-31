const mainElement = document.querySelector(`.central`);

export const renderWindow = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen.element);
};

export const getElementFromTemplate = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement;
};
