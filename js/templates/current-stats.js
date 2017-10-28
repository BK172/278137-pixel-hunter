import {currentData} from '../data/game-data';

export default () => {
  return `
    <ul class="stats">
      ${currentData.stats.map((item) => {
    return `<li class="stats__result stats__result--${item}"></li>`;
  }).join(``)}
    </ul>
  `;
};
