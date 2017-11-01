import GreetingView from './greeting-view';
import {renderWindow} from '../../utils';
import App from '../../application';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    renderWindow(this.view);

    this.view.onGreetingBtnClick = () => {
      App.showRules();
    };
  }
}

export default new GreetingScreen();
