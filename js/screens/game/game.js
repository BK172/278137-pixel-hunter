import GameView from './game-view';
import greeting from '../greeting/greeting';
import stats from '../stats/stats';
import {renderWindow} from '../../utils';
import {TIME_LIMIT, initialData, games, resetGame} from '../../data/game-data';
import getTimer from '../../timer';

const TIMER_INTERVAL = 1000;

const changeLevel = (state) => {
  const level = new GameView(games, state);
  let timer;

  const startTimer = () => {
    let time = TIME_LIMIT;

    timer = setInterval(() => {
      time = getTimer(time).tick().time;

      if (time < 1) {
        stopTimer();
        state.answers.splice(state.level, 1, `wrong`);
        state.lives--;
        chooseNextLevel();
      }

      state.time = time;
      level.updateTime(state.time);
    }, TIMER_INTERVAL);
  };

  const stopTimer = () => {
    clearInterval(timer);
    state.time = TIME_LIMIT;
  };

  const chooseNextLevel = () => {
    if (state.lives >= 0 && state.level < games.length - 1) {
      state.level++;
      renderWindow(changeLevel(state));
    } else {
      renderWindow(stats(state));
    }
  };

  const checkAnswerTime = (timeOfAnswer) => {
    if (timeOfAnswer > 20) {
      state.answers.splice(state.level, 1, `fast`);
    } else if (timeOfAnswer < 10) {
      state.answers.splice(state.level, 1, `slow`);
    } else {
      state.answers.splice(state.level, 1, `correct`);
    }
  };

  const checkAnswer = (checkCondition) => {
    const answerTime = state.time;

    stopTimer();

    if (checkCondition) {
      state.answers.splice(state.level, 1, `wrong`);
      state.lives--;
    } else {
      checkAnswerTime(answerTime);
    }

    chooseNextLevel();
  };

  level.onAnswer = (element, target) => {
    const container = element.querySelector(`.game__content`);
    const levelType = games[state.level].type;

    switch (levelType) {
      case `game1`:
        const answerElements = container.querySelectorAll(`.game__answer :checked`);

        if (answerElements.length === 2) {
          const result1 = container.querySelector(`input[name="question1"]:checked`);
          const result2 = container.querySelector(`input[name="question2"]:checked`);
          const rightAnswer1 = games[state.level].questions[0].answer;
          const rightAnswer2 = games[state.level].questions[1].answer;

          if (result1 && result2 && true) {
            const answer1 = result1.value === rightAnswer1 ? `correct` : `wrong`;
            const answer2 = result2.value === rightAnswer2 ? `correct` : `wrong`;

            checkAnswer((answer1 === `wrong` || answer2 === `wrong`), state);
          }
        }
        break;
      case `game2`:
        if (target.name === `question1` && target.checked) {
          const rightAnswer1 = games[state.level].questions[0].answer;
          const answer1 = target.value === rightAnswer1 ? `correct` : `wrong`;

          checkAnswer((answer1 === `wrong`), state);
        }
        break;
      case `game3`:
        const answerItems = container.querySelectorAll(`.game__option`);
        let answer1;

        if (target.classList.contains(`game__option`)) {
          for (let item of answerItems) {
            item.classList.remove(`game__option--selected`);
          }

          target.classList.add(`game__option--selected`);

          for (let i = 0; i < answerItems.length; i++) {
            if (answerItems[i].classList.contains(`game__option--selected`)) {
              const chosenImgType = games[state.level].questions[i].answer;

              answer1 = chosenImgType === `paint` ? `correct` : `wrong`;
              break;
            }
          }

          checkAnswer((answer1 === `wrong`), state);
        }
        break;
    }
  };

  level.onBtnBackClick = (evt) => {
    evt.preventDefault();

    stopTimer();
    resetGame(state);
    renderWindow(greeting);
  };

  stopTimer();
  startTimer();

  return level;
};

export default () => changeLevel(initialData);
