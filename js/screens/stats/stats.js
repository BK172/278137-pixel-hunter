import StatsView from './stats-view';
import {renderWindow} from '../../utils';
import App from '../../application';
import {addToHistory, resetGame} from '../../data/game-data';

class StatsScreen {
  init(state) {
    this.view = new StatsView(state);
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
