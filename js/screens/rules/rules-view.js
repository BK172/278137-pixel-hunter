import AbstractView from '../../abstract-view';
import getHeader from '../header';
import footer from '../footer';
import data from './rules-data';

export default class RulesView extends AbstractView {
  get template() {
    return `${getHeader()}
      <div class="rules">
        <h1 class="rules__title">${data.title}</h1>
        <p class="rules__description">${data.rules}</p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="${data.form.placeholder}">
          <button class="rules__button  continue" type="submit" disabled>${data.form.button}</button>
        </form>
      </div>
      ${footer}`;
  }

  bind() {
    const rulesBtn = this.element.querySelector(`.rules__button`);
    const rulesInput = this.element.querySelector(`.rules__input`);
    const btnBack = this.element.querySelector(`.back`);

    rulesInput.oninput = () => {
      if (rulesInput.value === ``) {
        rulesBtn.setAttribute(`disabled`, ``);
      } else {
        rulesBtn.removeAttribute(`disabled`);
      }
    };

    rulesBtn.onclick = (evt) => {
      evt.preventDefault();
      this.onRulesBtnClick();
    };

    btnBack.onclick = () => {
      this.onBtnBackClick();
    };
  }

  onRulesBtnClick() {

  }

  onBtnBackClick() {

  }
}
