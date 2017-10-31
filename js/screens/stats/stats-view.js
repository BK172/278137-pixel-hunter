import AbstractView from '../../abstract-view';
import getHeader from '../header';
import footer from '../footer';
import getStats from '../current-stats';
import {getScore, getScoreCount} from '../../get-score';
import {gameHistory} from '../../data/game-data';
import statsData from './stats-data';

export default class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const _score = getScore(this.state.answers, this.state.lives);
    const _scoreCount = getScoreCount(this.state.answers);
    const _correctLives = this.state.lives === -1 ? 0 : this.state.lives;

    const getTemplateWin = (answers, lives, score, scoreCount, resultNumber = 1) => {
      return `<table class="result__table">
        <tr>
          <td class="result__number">${resultNumber}.</td>
          <td colspan="2">
            ${getStats(answers)}
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${score.correct}</td>
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
    };

    const getTemplateHistory = (history) => {
      let template = ``;

      for (let i = 0; i < history.length; i++) {
        template += getTemplateWin(history[i].answers, history[i].lives, history[i].score, history[i].scoreCount, i + 2);
      }

      return template;
    };

    const getTemplateFail = (answers, score, resultNumber = 1) => {
      return `<table class="result__table">
        <tr>
          <td class="result__number">${resultNumber}.</td>
          <td>
            ${getStats(answers)}
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">${statsData.statusFail}</td>
        </tr>
      </table>`;
    };

    let statsTemplate = `${getHeader()}
      <div class="result">`;

    if (this.state.lives >= 0 && this.state.level === this.state.answers.length - 1) {
      statsTemplate += `<h1>${statsData.title.win}</h1>`;
      statsTemplate += getTemplateWin(this.state.answers, _correctLives, _score, _scoreCount);
      statsTemplate += getTemplateHistory(gameHistory);
    } else {
      statsTemplate += `<h1>${statsData.title.fail}</h1>`;
      statsTemplate += getTemplateFail(this.state.answers, _score);
    }

    statsTemplate += `</div>
      ${footer}`;

    this.history = {
      answers: this.state.answers.slice(),
      lives: _correctLives,
      score: _score,
      scoreCount: _scoreCount
    };

    return statsTemplate;
  }

  bind() {
    const btnBack = this.element.querySelector(`.back`);

    btnBack.addEventListener(`click`, this.onBtnBackClick);
  }

  onBtnBackClick() {

  }
}
