import {initialData, currentData, games} from './data/game-data';

export const resetGame = () => {
  Object.assign(currentData, initialData);
  currentData.stats = new Array(10).fill(`unknown`);
};
