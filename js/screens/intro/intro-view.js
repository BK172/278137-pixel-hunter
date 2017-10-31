import AbstractView from '../../abstract-view';
import footer from '../footer';
import data from './intro-data';

export default class IntroView extends AbstractView {
  get template() {
    return `<div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto">${data.motto}</p>
      </div>
    </div>
    ${footer}`;
  }

  bind() {
    const introBtn = this.element.querySelector(`.intro__asterisk`);
    introBtn.addEventListener(`click`, this.onIntroBtnClick);
  }

  onIntroBtnClick() {

  }
}
