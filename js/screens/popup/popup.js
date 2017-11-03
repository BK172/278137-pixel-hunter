import PopupView from './popup-view';
import {renderWindow} from '../../utils';
import App from '../../application';

class PopupScreen {
  constructor() {
    this.view = new PopupView();
  }

  init() {
    renderWindow(this.view);

    this.view.onBtnYesClick = () => {
      App.showGreeting();
    };

    this.view.onBtnNoClick = () => {
      this.view.remove();
    };
  }
}

export default new PopupScreen();
