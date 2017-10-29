// import getElementFromTemplate from '../utils';
// import renderWindow from '../render-window';
// import introTemplate from './intro';
// import {resetGame} from '../main';

export default (data) => {
  let template = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>`;

  if (data) {
    template += `<h1 class="game__timer">${data.time}</h1>
      <div class="game__lives">
        ${new Array(3 - data.lives)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
        ${new Array(data.lives)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      </div>`;
  }

  template += `</header>`;

  return template;

  // const templateHeader = getElementFromTemplate(template(currentData));
  // const btnBack = templateHeader.querySelector(`.back`);

  // btnBack.addEventListener(`click`, (evt) => {
  //   evt.preventDefault();

  //   resetGame();
  //   const intro = introTemplate();
  //   renderWindow(intro, true);
  // });

  // return templateHeader;
};
