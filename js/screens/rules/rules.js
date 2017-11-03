import RulesView from './rules-view';
import {renderWindow} from '../../utils';
import App from '../../application';

class RulesScreen {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    renderWindow(this.view);

    this.view.onRulesBtnClick = () => {
      App.showGame();
    };

    this.view.onBtnBackClick = () => {
      App.showGreeting();
    };
  }
}

export default new RulesScreen();

