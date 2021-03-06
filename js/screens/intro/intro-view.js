import AbstractView from '../../abstract-view';
import footer from '../footer';
import data from './intro-data';
import {mainElement} from '../../utils';

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
    this.element.classList.add(`fade`);
  }

  hide() {
    this.element.style.opacity = 0;
  }

  show() {
    mainElement.appendChild(this.element);
    this.element.style.opacity = 1;
  }
}
