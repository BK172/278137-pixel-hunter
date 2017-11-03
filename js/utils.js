export const mainElement = document.querySelector(`.central`);

export const renderWindow = (screen, container = mainElement) => {
  container.innerHTML = ``;
  container.appendChild(screen.element);
};

export const getElementFromTemplate = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement;
};
