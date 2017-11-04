import IntroScreen from './screens/intro/intro';
import GreetingScreen from './screens/greeting/greeting';
import RulesScreen from './screens/rules/rules';
import GameScreen from './screens/game/game';
import StatsScreen from './screens/stats/stats';
import Loader from './loader';
import adapt from './data/adapter';
import {initialData} from './data/game-data';
import {preloadImages} from './utils';

const ControllerId = {
  GREETING: ``,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const saveState = (state) => {
  return btoa(JSON.stringify(state));
};

const loadState = (dataString) => {
  try {
    return JSON.parse(atob(dataString));
  } catch (err) {
    return initialData;
  }
};

export default class Application {
  static init(gameData) {
    this.routes = {
      [ControllerId.GREETING]: GreetingScreen,
      [ControllerId.RULES]: RulesScreen,
      [ControllerId.GAME]: new GameScreen(gameData),
      [ControllerId.STATS]: StatsScreen
    };

    const onWindowHasChange = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);

      this.changeHash(id, data);
    };

    window.onhashchange = onWindowHasChange;
    onWindowHasChange();
  }

  static changeHash(id, data) {
    const controller = this.routes[id];

    if (controller) {
      controller.init(loadState(data));
    }
  }

  static showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  static showRules() {
    location.hash = ControllerId.RULES;
  }

  static showGame(state = initialData) {
    location.hash = `${ControllerId.GAME}?${saveState(state)}`;
  }

  static showStats(state) {
    location.hash = `${ControllerId.STATS}?${saveState(state)}`;
  }
}

GreetingScreen.init();
GreetingScreen.hide();
IntroScreen.show();
Loader.loadData().
    then(adapt).
    then((gameData) => preloadImages(gameData)).
    then((gameData) => Application.init(gameData)).
    then(() => GreetingScreen.show()).
    then(() => IntroScreen.hide()).
    catch(window.console.error);
