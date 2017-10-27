// import getElementFromTemplate from '../utils';
// import renderWindow from '../render-window';
// import {introTemplate, renderGreeting} from './intro';
// import getHeader from '../templates/header';
// import {currentData, games} from "../data/game-data";
// import getCurrentStats from '../templates/current-stats';
// import {checkLives, renderNextTemplate} from '../main';

// const game2Template = getElementFromTemplate(`${getHeader(currentData)}
//   <div class="game">
//     <p class="game__task">${games[currentData.gameNum].task}</p>
//     <form class="game__content  game__content--wide">
//       <div class="game__option">
//         <img src=${games[currentData.gameNum].questions[0].url} alt=${games[currentData.gameNum].questions[0].title} width=${games[currentData.gameNum].questions[0].width} height=${games[currentData.gameNum].questions[0].height}>
//         <label class="game__answer  game__answer--photo">
//           <input name="question1" type="radio" value="photo">
//           <span>Фото</span>
//         </label>
//         <label class="game__answer  game__answer--wide  game__answer--paint">
//           <input name="question1" type="radio" value="drawing">
//           <span>Рисунок</span>
//         </label>
//       </div>
//     </form>
//     <div class="stats">
//       ${getCurrentStats(currentData.stats)}
//     </div>
//   </div>`);

// const renderGame3 = () => {
//   const btnBack = document.querySelector(`.back`);
//   const game2Controls = Array.from(document.querySelectorAll(`.game__answer`));

//   btnBack.addEventListener(`click`, () => {
//     renderWindow(introTemplate, true);
//     renderGreeting();
//   });

//   game2Controls.forEach((item) => {
//     item.addEventListener(`click`, () => {
//       renderWindow(game3Template);
//       renderStats();
//     });
//   });
// };

// export {game2Template, renderGame3};
