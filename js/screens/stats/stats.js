// import StatsView from './stats-view';
// import greeting from '../greeting/greeting';
// import {renderWindow} from '../../utils';
// import {addToHistory, resetGame} from '../../data/game-data';

// export default (state) => {
//   const stats = new StatsView(state);

//   stats.onBtnBackClick = (evt) => {
//     evt.preventDefault();

//     const history = {
//       answers: stats.state.answers.slice(),
//       lives: stats._correctLives,
//       score: stats._score,
//       scoreCount: stats._scoreCount
//     };

//     //addToHistory(stats.history);
//     addToHistory(history);
//     resetGame(state);
//     renderWindow(greeting);
//   };

//   return stats;
// };

import StatsView from './stats-view';
import {renderWindow} from '../../utils';
import App from '../../application';
import {addToHistory, resetGame} from '../../data/game-data';

class StatsScreen {
  constructor(state) {
    this.view = new StatsView(state);
  }

  init(state) {
    renderWindow(this.view);

    this.view.onBtnBackClick = () => {
      const history = {
        answers: this.view.state.answers.slice(),
        lives: this.view._correctLives,
        score: this.view._score,
        scoreCount: this.view._scoreCount
      };

      addToHistory(history);
      resetGame(state);
      App.showGreeting();
    };
  }
}

export default new StatsScreen();
