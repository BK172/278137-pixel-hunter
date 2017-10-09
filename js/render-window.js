const mainElement = document.querySelector(`.central`);

const renderWindow = (elem, introFlag = false) => {
  mainElement.innerHTML = ``;

  if (!introFlag) {
    mainElement.appendChild(elem);
  } else {
    mainElement.appendChild(elem.children.intro);
  }
};

export default renderWindow;
