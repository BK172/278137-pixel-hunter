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

  hide() {
    this.view.hide();
  }

  show() {
    this.view.show();
  }
}

export default new GreetingScreen();
