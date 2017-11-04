import AbstractView from '../../abstract-view';
import getHeader from '../header';
import footer from '../footer';
import getStats from '../current-stats';
import statsData from './stats-data';

export default class StatsView extends AbstractView {
  constructor(history) {
    super();
    this.history = history;
  }

  get template() {
    const getTemplate = (history, resultNumber = 1) => {
      let template = `<table class="result__table">
        <tr>
          <td class="result__number">${resultNumber}.</td>
          <td colspan="2">
            ${getStats(history.answers)}
          </td>
          <td class="result__points">×&nbsp;100</td>`;

      if (history.status === `fail`) {
        template += `<td class="result__total">${statsData.title.fail}</td>
            </tr>
          </table>`;
      } else {
        template += `<td class="result__total">${history.scores.correct}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">${statsData.bonus.speed}</td>
              <td class="result__extra">${history.scoreCount.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${history.scores.fast}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">${statsData.bonus.lives}</td>
              <td class="result__extra">${history.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${history.scores.lives}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">${statsData.bonus.fine}</td>
              <td class="result__extra">${history.scoreCount.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${history.scores.slow}</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${history.scores.total}</td>
            </tr>
          </table>`;
      }

      return template;
    };

    let statsTemplate = `${getHeader()}
      <div class="result">`;

    if (this.history[0].status === `win`) {
      statsTemplate += `<h1>${statsData.title.win}</h1>`;
    } else {
      statsTemplate += `<h1>${statsData.title.fail}</h1>`;
    }

    statsTemplate += this.history.map((item, i) => getTemplate(item, i + 1));
    statsTemplate += `</div>
      ${footer}`;

    return statsTemplate;
  }

  bind() {
    const btnBackElement = this.element.querySelector(`.back`);

    btnBackElement.onclick = () => {
      this.onBtnBackClick();
    };
  }

  onBtnBackClick() {

  }
}
