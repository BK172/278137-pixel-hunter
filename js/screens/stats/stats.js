import StatsView from './stats-view';
import {renderWindow} from '../../utils';
import App from '../../application';
import {resetGame} from '../../data/game-data';
import Loader from '../../loader';
import {getScore, getScoreCount} from '../../get-score';

class StatsScreen {
  init(state) {
    const renderStats = (data) => {
      data.reverse();

      if (data.length > 3) {
        data = data.slice(0, 3);
      }

      this.view = new StatsView(data);
      renderWindow(this.view);

      this.view.onBtnBackClick = () => {
        resetGame(state);
        App.showGreeting();
      };
    };

    let gameStatus;

    if (state.lives >= 0 && state.level === state.answers.length - 1) {
      gameStatus = `win`;
    } else {
      gameStatus = `fail`;
    }

    state.status = gameStatus;
    state.scores = getScore(state.answers, state.lives);
    state.scoreCount = getScoreCount(state.answers);
    state.lives = state.lives === -1 ? 0 : state.lives;

    Loader.saveResults(state).then(() => {
      Loader.loadResults().
          then((data) => renderStats(data));
    });
  }
}

export default new StatsScreen();
