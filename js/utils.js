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

export const preloadImages = (data) => {
  const images = [].concat(...data.map((item) => item.questions));
  const promises = images.map((image) => {
    return new Promise((resolve) => {
      const img = document.createElement(`img`);

      img.src = image.url;
      img.onload = img.onerror = () => resolve();
    });
  });

  return Promise.all(promises).then(() => data);
};
