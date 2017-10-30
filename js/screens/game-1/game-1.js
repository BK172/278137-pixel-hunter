import GameView from './game-1-view';
import greeting from '../greeting/greeting';
import {renderWindow} from '../../utils';
import {resetGame} from '../../common';

import {initialData, currentData, games} from '../../data/game-data';
import getTimer from '../../timer';

const changeLevel = (state) => {
  const level = new GameView(games, state);

  let timer;
  const startTimer = () => {
    timer = setTimeout(() => {
      state = getTimer(state.time).tick();
      level.updateTime(state.time);
      startTimer();
    }, 1000);
  };

  startTimer();

  level.onBtnBackClick = (evt) => {
    evt.preventDefault();
    renderWindow(greeting);
    resetGame();
  };

  level.onAnswer = (container, data, target) => {
    clearTimeout(timer);

    if (data.level < games.length - 1 && data.lives > 0 && data.time > 0) {
      const levelType = games[data.level].type;
      console.log(levelType);


    } else {
      //render stat
    }
  };

  return level;
};

export default () => changeLevel(initialData);



// import getElementFromTemplate from '../utils';
// import {currentData, games} from '../data/game-data';
// import getCurrentStats from './current-stats';
// import {checkAnswer} from '../main';

// export default () => {
//   const templateGame1 = getElementFromTemplate(`<div class="game">
//       <p class="game__task">${games[currentData.gameNum].task}</p>
//       <form class="game__content">
//         <div class="game__option">
//           <img src=${games[currentData.gameNum].questions[0].url} alt=${games[currentData.gameNum].questions[0].title} width=${games[currentData.gameNum].questions[0].width} height=${games[currentData.gameNum].questions[0].height}>
//           <label class="game__answer game__answer--photo">
//             <input name="question1" type="radio" value="photo">
//             <span>Фото</span>
//           </label>
//           <label class="game__answer game__answer--paint">
//             <input name="question1" type="radio" value="drawing">
//             <span>Рисунок</span>
//           </label>
//         </div>
//         <div class="game__option">
//           <img src=${games[currentData.gameNum].questions[1].url} alt=${games[currentData.gameNum].questions[1].title} width=${games[currentData.gameNum].questions[1].width} height=${games[currentData.gameNum].questions[1].height}>
//           <label class="game__answer  game__answer--photo">
//             <input name="question2" type="radio" value="photo">
//             <span>Фото</span>
//           </label>
//           <label class="game__answer  game__answer--paint">
//             <input name="question2" type="radio" value="drawing">
//             <span>Рисунок</span>
//           </label>
//         </div>
//       </form>
//       <div class="stats">
//         ${getCurrentStats()}
//       </div>
//     </div>`);

//   const form = templateGame1.querySelector(`.game__content`);
//   const question1 = form.querySelectorAll(`input[name="question1"]`);
//   const question2 = form.querySelectorAll(`input[name="question2"]`);

//   let result1 = false;
//   let result2 = false;

//   const checkResult = (result, answer) => {
//     if (result === answer) {
//       return `correct`;
//     } else {
//       return `wrong`;
//     }
//   };

//   const onFormElementClick = () => {
//     for (let i = 0; i < question1.length; i++) {
//       if (question1[i].checked) {
//         result1 = question1[i].getAttribute(`value`);
//       }
//     }

//     for (let i = 0; i < question2.length; i++) {
//       if (question2[i].checked) {
//         result2 = question2[i].getAttribute(`value`);
//       }
//     }

//     if (result1 && result2 && true) {
//       const answer1 = checkResult(result1, games[currentData.gameNum].questions[0].answer);
//       const answer2 = checkResult(result2, games[currentData.gameNum].questions[1].answer);

//       checkAnswer(answer1 === `wrong` || answer2 === `wrong`);
//     }
//   };

//   form.addEventListener(`click`, onFormElementClick);

//   return templateGame1;
// };