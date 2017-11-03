import StatsView from './stats-view';
import {renderWindow} from '../../utils';
import App from '../../application';
import {addToHistory, resetGame} from '../../data/game-data';

class StatsScreen {
  init(state) {
    let gameStatus;

    if (state.lives >= 0 && state.level === state.answers.length - 1) {
      gameStatus = `win`;
    } else {
      gameStatus = `fail`;
    }

    this.view = new StatsView(state, gameStatus);
    renderWindow(this.view);

    this.view.onBtnBackClick = () => {
      const history = {
        answers: this.view.state.answers.slice(),
        lives: this.view.correctLives,
        scores: this.view.scores,
        scoreCount: this.view.scoreCount,
        status: gameStatus
      };

      addToHistory(history);
      resetGame(state);
      App.showGreeting();
    };
  }
}

export default new StatsScreen();
