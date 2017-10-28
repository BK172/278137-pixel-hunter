import getElementFromTemplate from '../utils';
import renderWindow from '../render-window';
import getHeader from './header';
import game1Template from './game-1';
import {currentData} from '../data/game-data';

export default () => {
  const templateRules = getElementFromTemplate(`<div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
    </div>`);

  const rulesBtn = templateRules.querySelector(`.rules__button`);
  const rulesInput = templateRules.querySelector(`.rules__input`);
  let isNameEntered = false;

  const onRulesBtnClick = (evt) => {
    evt.preventDefault();

    if (isNameEntered) {
      const game1 = game1Template();
      const gameHeader = getHeader(currentData);
      game1.prepend(gameHeader);
      renderWindow(game1);
    }
  };

  const onRulesInput = () => {
    if (rulesInput.value) {
      rulesBtn.removeAttribute(`disabled`);
      isNameEntered = true;
    } else {
      rulesBtn.setAttribute(`disabled`, ``);
      isNameEntered = false;
    }
  };

  rulesBtn.addEventListener(`click`, onRulesBtnClick);
  rulesInput.addEventListener(`input`, onRulesInput);

  return templateRules;
};
