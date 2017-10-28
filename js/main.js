import renderWindow from './render-window';
import introTemplate from './templates/intro';
import {initialData, currentData, games} from './data/game-data';
import getHeader from './templates/header';
import getHeaderNoStat from './templates/header-nostat';
import game1Template from './templates/game-1';
import game2Template from './templates/game-2';
import game3Template from './templates/game-3';
import statsTemplate from './templates/stats';

export const renderTemplate = (template, headerNoStatFlag) => {
  const temporaryTemplate = template();
  let header;

  if (headerNoStatFlag) {
    header = getHeaderNoStat(currentData);
  } else {
    header = getHeader(currentData);
  }

  temporaryTemplate.prepend(header);
  renderWindow(temporaryTemplate);
};

export const renderNextTemplate = () => {
  switch (games[currentData.gameNum].type) {
    case `game1`:
      renderTemplate(game1Template);
      // const game1 = game1Template();
      // const gameHeader1 = getHeader(currentData);
      // game1.prepend(gameHeader1);
      // renderWindow(game1);
      break;
    case `game2`:
      renderTemplate(game2Template);
      // const game2 = game2Template();
      // const gameHeader2 = getHeader(currentData);
      // game2.prepend(gameHeader2);
      // renderWindow(game2);
      break;
    case `game3`:
      renderTemplate(game3Template);
      // const game3 = game3Template();
      // const gameHeader3 = getHeader(currentData);
      // game3.prepend(gameHeader3);
      // renderWindow(game3);
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
  } else {
    currentData.stats.splice(currentData.gameNum, 1, `correct`);
  }

  if (currentData.lives >= 1) {
    if (currentData.gameNum < currentData.stats.length - 1) {
      currentData.gameNum++;
      renderNextTemplate();
    } else if (currentData.gameNum === currentData.stats.length - 1) {
      renderTemplate(statsTemplate, true);
    }
  } else {
    renderTemplate(statsTemplate, true);
  }
};

const intro = introTemplate();
renderWindow(intro, true);
