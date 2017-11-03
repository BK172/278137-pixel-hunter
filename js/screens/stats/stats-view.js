import AbstractView from '../../abstract-view';
import getHeader from '../header';
import footer from '../footer';
import getStats from '../current-stats';
import {getScore, getScoreCount} from '../../get-score';
import {gameHistory} from '../../data/game-data';
import statsData from './stats-data';

export default class StatsView extends AbstractView {
  constructor(state, status) {
    super();
    this.state = state;
    this.status = status;
    this.scores = getScore(this.state.answers, this.state.lives);
    this.scoreCount = getScoreCount(this.state.answers);
    this.correctLives = this.state.lives === -1 ? 0 : this.state.lives;
  }

  get template() {
    const getTemplate = (answers, lives, score, scoreCount, status, resultNumber = 1) => {
      let template = `<table class="result__table">
        <tr>
          <td class="result__number">${resultNumber}.</td>
          <td colspan="2">
            ${getStats(answers)}
          </td>
          <td class="result__points">×&nbsp;100</td>`;

      if (status === `fail`) {
        template += `<td class="result__total">${statsData.title.fail}</td>
            </tr>
          </table>`;
      } else {
        template += `<td class="result__total">${score.correct}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">${statsData.bonus.speed}</td>
              <td class="result__extra">${scoreCount.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${score.fast}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">${statsData.bonus.lives}</td>
              <td class="result__extra">${lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${score.lives}</td>
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">${statsData.bonus.fine}</td>
              <td class="result__extra">${scoreCount.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;50</td>
              <td class="result__total">${score.slow}</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${score.total}</td>
            </tr>
          </table>`;
      }

      return template;
    };

    const getTemplateHistory = (history) => {
      let template = ``;

      for (let i = 0; i < history.length; i++) {
        template += getTemplate(history[i].answers, history[i].lives, history[i].scores, history[i].scoreCount, history[i].status, i + 2);
      }

      return template;
    };

    let statsTemplate = `${getHeader()}
      <div class="result">`;

    if (this.status === `win`) {
      statsTemplate += `<h1>${statsData.title.win}</h1>`;
      statsTemplate += getTemplate(this.state.answers, this.correctLives, this.scores, this.scoreCount, this.status);
      statsTemplate += getTemplateHistory(gameHistory);
    } else {
      statsTemplate += `<h1>${statsData.title.fail}</h1>`;
      statsTemplate += getTemplate(this.state.answers, this.correctLives, this.scores, this.scoreCount, this.status);
    }

    statsTemplate += `</div>
      ${footer}`;

    return statsTemplate;
  }

  bind() {
    const btnBack = this.element.querySelector(`.back`);

    btnBack.onclick = () => {
      this.onBtnBackClick();
    };
  }

  onBtnBackClick() {

  }
}
