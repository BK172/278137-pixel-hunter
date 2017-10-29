import footerTemplate from './templates/footer';

const mainElement = document.querySelector(`.central`);

const renderWindow = (elem, introFlag = false) => {
  mainElement.innerHTML = ``;

  if (!introFlag) {
    mainElement.appendChild(elem);
  } else {
    mainElement.appendChild(elem);
    elem.classList.add(`central__content`);
  }

  mainElement.appendChild(footerTemplate);
};

export default renderWindow;
