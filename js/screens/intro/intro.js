import IntroView from './intro-view';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  hide() {
    this.view.hide();
  }

  show() {
    this.view.show();
  }
}

export default new IntroScreen();
