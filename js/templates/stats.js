import getElementFromTemplate from '../utils';
import {currentData} from '../data/game-data';
import getCurrentStats from '../templates/current-stats';
import {getScore} from '../get-score';

export default () => {
  let template = `<div class="result">`;

  if (currentData.lives > 0) {
    template += `<h1>Победа</h1>`;
  } else {
    template += `<h1>FAIL</h1>`;
  }

  template += `<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${getCurrentStats()}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${getScore(currentData.stats, currentData.lives)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">0</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${currentData.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${currentData.lives * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">0</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${getScore(currentData.stats, currentData.lives)}</td>
      </tr>
    </table>
  </div>`;

  const statsTemplate = getElementFromTemplate(template);
  // const statsHeader = getHeader();
  // statsTemplate.prepend(statsHeader);
  // renderWindow(statsTemplate);

  return statsTemplate;
};
