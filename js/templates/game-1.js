import getElementFromTemplate from '../utils';
import renderWindow from '../render-window';
import {introTemplate, renderGreeting} from './intro';
import {currentData, games} from '../data/game-data';
import getCurrentStats from '../templates/current-stats';
import {checkLives, renderNextTemplate} from '../main';

export default () => {
  const game1Template = getElementFromTemplate(`<div class="game">
      <p class="game__task">${games[currentData.gameNum].task}</p>
      <form class="game__content">
        <div class="game__option">
          <img src=${games[currentData.gameNum].questions[0].url} alt=${games[currentData.gameNum].questions[0].title} width=${games[currentData.gameNum].questions[0].width} height=${games[currentData.gameNum].questions[0].height}>
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="drawing">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src=${games[currentData.gameNum].questions[1].url} alt=${games[currentData.gameNum].questions[1].title} width=${games[currentData.gameNum].questions[1].width} height=${games[currentData.gameNum].questions[1].height}>
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="drawing">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        ${getCurrentStats(currentData.stats)}
      </div>
    </div>`);

  const form = game1Template.querySelector(`.game__content`);
  const question1 = form.querySelectorAll(`input[name="question1"]`);
  const question2 = form.querySelectorAll(`input[name="question2"]`);

  let result1 = false;
  let result2 = false;

  const checkResult = (result, answer) => {
    if (result === answer) {
      return `correct`;
    } else {
      return `wrong`;
    }
  };

  const checkAnswers = () => {
    for (let i = 0; i < question1.length; i++) {
      if (question1[i].checked) {
        result1 = question1[i].getAttribute(`value`);
      }
    }

    for (let i = 0; i < question2.length; i++) {
      if (question2[i].checked) {
        result2 = question2[i].getAttribute(`value`);
      }
    }

    if (result1 && result2 && true) {
      const answer1 = checkResult(result1, games[currentData.gameNum].questions[0].answer);
      const answer2 = checkResult(result2, games[currentData.gameNum].questions[1].answer);

      if (answer1 === `wrong` || answer2 === `wrong`) {
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
    }
  };

  form.addEventListener(`click`, checkAnswers);

  return game1Template;
};
