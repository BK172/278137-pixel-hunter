import renderWindow from './render-window';
import {introTemplate, renderGreeting} from './templates/intro';
import {currentData, games} from './data/game-data';
import getHeader from './templates/header';
import game1Template from './templates/game-1';
import game2Template from './templates/game-2';
import game3Template from './templates/game-3';

export const checkLives = () => {
  if (currentData.lives < 1) {
    // final stats
  }
};

export const renderNextTemplate = () => {
  switch (games[currentData.gameNum].type) {
    case `game1`:
      const game1 = game1Template();
      const gameHeader = getHeader();
      game1.prepend(gameHeader);
      renderWindow(game1);
      break;
    case `game2`:
      const game2 = game2Template();
      const gameHeader = getHeader();
      game2.prepend(gameHeader);
      renderWindow(game2);
      break;
    case `game3`:
      const game3 = game3Template();
      const gameHeader = getHeader();
      game3.prepend(gameHeader);
      renderWindow(game3);
      break;
  }
};

renderWindow(introTemplate, true);
renderGreeting();
