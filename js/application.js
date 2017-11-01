import introScreen from './screens/intro/intro';
import greetingScreen from './screens/greeting/greeting';
import rulesScreen from './screens/rules/rules';
import gameScreen from './screens/game/game';
import {initialData} from './data/game-data';
import statsScreen from './stats/stats';

// const winScreen = new GameOverScreen(true);
// const dieScreen = new GameOverScreen(false);

export default class Application {
  static showIntro() {
    introScreen.init();
  }

  static showGreeting() {
    greetingScreen.init();
  }

  static showRules() {
    rulesScreen.init();
  }

  static showGame(state = initialData) {
    gameScreen.init(state);
  }

  static showStats(state) {
    statsScreen.init(state);
  }

  // static die(state) {
  //   dieScreen.init(state);
  // }

  // static win(state) {
  //   winScreen.init(state);
  // }
}
