import getElementFromTemplate from '../utils';
import {currentData, games} from '../data/game-data';
import getCurrentStats from '../templates/current-stats';
import {checkAnswer} from '../main';

export default () => {
  const templateGame2 = getElementFromTemplate(`<div class="game">
    <p class="game__task">${games[currentData.gameNum].task}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${games[currentData.gameNum].questions[0].url} alt=${games[currentData.gameNum].questions[0].title} width=${games[currentData.gameNum].questions[0].width} height=${games[currentData.gameNum].questions[0].height}>
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="drawing">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      ${getCurrentStats()}
    </div>
  </div>`);

  const form = templateGame2.querySelector(`.game__content`);
  const question1 = form.querySelectorAll(`input[name="question1"]`);

  let result1 = false;

  const checkResult = (result, answer) => {
    if (result === answer) {
      return `correct`;
    } else {
      return `wrong`;
    }
  };

  const onFormElementClick = () => {
    for (let i = 0; i < question1.length; i++) {
      if (question1[i].checked) {
        result1 = question1[i].getAttribute(`value`);
      }
    }

    if (result1 && true) {
      const answer1 = checkResult(result1, games[currentData.gameNum].questions[0].answer);

      checkAnswer(answer1 === `wrong`);

      // if (answer1 === `wrong`) {
      //   currentData.stats.splice(currentData.gameNum, 1, `wrong`);
      //   currentData.lives--;
      //   checkLives();
      // } else {
      //   currentData.stats.splice(currentData.gameNum, 1, `correct`);
      // }

      // if (currentData.gameNum < currentData.stats.length - 1) {
      //   currentData.gameNum++;
      //   renderNextTemplate();
      // } else if (currentData.gameNum === currentData.stats.length - 1) {
      //   // render final stat
      // }
    }
  };

  form.addEventListener(`click`, onFormElementClick);

  return templateGame2;
};
