import getElementFromTemplate from '../utils';
import renderWindow from '../render-window';
import introTemplate from './intro';
import {resetGame} from '../main';

export default () => {
  const template = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>`;

  const templateHeader = getElementFromTemplate(template);
  const btnBack = templateHeader.querySelector(`.back`);

  btnBack.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    resetGame();
    const intro = introTemplate();
    renderWindow(intro, true);
  });

  return templateHeader;
};
