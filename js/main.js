import renderWindow from './render-window';
import introTemplate from './templates/intro';
import {initialData, currentData, games} from './data/game-data';
import getHeader from './templates/header';
import game1Template from './templates/game-1';
import game2Template from './templates/game-2';
import game3Template from './templates/game-3';

const checkLives = () => {
  if (currentData.lives < 1) {
    // final stats
  }
};

export const renderNextTemplate = () => {
  switch (games[currentData.gameNum].type) {
    case `game1`:
      const game1 = game1Template();
      const gameHeader1 = getHeader(currentData);
      game1.prepend(gameHeader1);
      renderWindow(game1);
      break;
    case `game2`:
      const game2 = game2Template();
      const gameHeader2 = getHeader(currentData);
      game2.prepend(gameHeader2);
      renderWindow(game2);
      break;
    case `game3`:
      const game3 = game3Template();
      const gameHeader3 = getHeader(currentData);
      game3.prepend(gameHeader3);
      renderWindow(game3);
      break;
  }
};

export const resetGame = () => {
  Object.assign(currentData, initialData);
  currentData.stats = new Array(10).fill(`unknown`);
};

export const checkAnswer = (checkCondition) => {
  if (checkCondition) {
    currentData.stats.splice(currentData.gameNum, 1, `wrong`);
    currentData.lives--;
    checkLives();
  } else {
    currentData.stats.splice(currentData.gameNum, 1, `correct`);
  }

  if (currentData.gameNum < currentData.stats.length - 1) {
    currentData.gameNum++;
    renderNextTemplate();
  } else if (currentData.gameNum === currentData.stats.length - 1) {
    // render final stat
  }
};

const intro = introTemplate();
renderWindow(intro, true);
