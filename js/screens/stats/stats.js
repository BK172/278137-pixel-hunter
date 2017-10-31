import StatsView from './stats-view';
import greeting from '../greeting/greeting';
import {renderWindow} from '../../utils';
import {addToHistory, resetGame} from '../../data/game-data';

export default (state) => {
  const stats = new StatsView(state);

  stats.onBtnBackClick = (evt) => {
    evt.preventDefault();

    addToHistory(stats.history);
    resetGame(state);
    renderWindow(greeting);
  };

  return stats;
};
