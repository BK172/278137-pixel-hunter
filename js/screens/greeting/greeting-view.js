import AbstractView from '../../abstract-view';
import footer from '../footer';
import data from './greeting-data';

export default class GreetingView extends AbstractView {
  get template() {
    return `<div class="greeting central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>${data.title}</h3>
        <p>${data.rules}</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>
    ${footer}`;
  }

  bind() {
    const greetingBtnElement = this.element.querySelector(`.greeting__continue`);

    greetingBtnElement.onclick = () => {
      this.onGreetingBtnClick();
    };

    this.element.classList.add(`fade`);
  }

  hide() {
    this.element.classList.add(`hidden`);
    this.element.style.opacity = 0;
  }

  show() {
    this.element.classList.remove(`hidden`);
    this.element.style.opacity = 1;
  }

  onGreetingBtnClick() {

  }
}
