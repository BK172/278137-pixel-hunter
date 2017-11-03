import IntroView from './intro-view';
import {renderWindow} from '../../utils';
import App from '../../application';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    renderWindow(this.view);

    this.view.onIntroBtnClick = () => {
      App.showGreeting();
    };
  }
}

export default new IntroScreen();
