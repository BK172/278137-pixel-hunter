import getElementFromTemplate from '../utils';
import {currentData, games} from '../data/game-data';
import getCurrentStats from '../templates/current-stats';
import {checkAnswer} from '../main';

export default () => {
  const templateGame3 = getElementFromTemplate(`<div class="game">
    <p class="game__task">${games[currentData.gameNum].task}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src=${games[currentData.gameNum].questions[0].url} alt=${games[currentData.gameNum].questions[0].title} width=${games[currentData.gameNum].questions[0].width} height=${games[currentData.gameNum].questions[0].height}>
      </div>
      <div class="game__option">
        <img src=${games[currentData.gameNum].questions[1].url} alt=${games[currentData.gameNum].questions[1].title} width=${games[currentData.gameNum].questions[1].width} height=${games[currentData.gameNum].questions[1].height}>
      </div>
      <div class="game__option">
        <img src=${games[currentData.gameNum].questions[2].url} alt=${games[currentData.gameNum].questions[2].title} width=${games[currentData.gameNum].questions[2].width} height=${games[currentData.gameNum].questions[2].height}>
      </div>
    </form>
    <div class="stats">
      ${getCurrentStats()}
    </div>
  </div>`);

  const form = templateGame3.querySelector(`.game__content`);
  const pictures = form.querySelectorAll(`.game__option`);

  const checkResult = (questions) => {
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answer === `drawing`) {
        return `correct`;
      }
    }

    return `wrong`;
  };

  const onFormElementClick = (evt) => {
    evt.preventDefault();

    let answer1;

    if (evt.target.classList.contains(`game__option`)) {
      for (let i = 0; i < pictures.length; i++) {
        pictures[i].classList.remove(`game__option--selected`);
      }

      evt.target.classList.add(`game__option--selected`);

      for (let i = 0; i < pictures.length; i++) {
        if (pictures[i].classList.contains(`game__option--selected`)) {
          answer1 = checkResult(games[currentData.gameNum].questions);
        }
      }
    }

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
  };

  form.addEventListener(`click`, onFormElementClick);

  return templateGame3;
};
