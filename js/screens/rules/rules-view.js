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
    const rulesBtnElement = this.element.querySelector(`.rules__button`);
    const rulesInputElement = this.element.querySelector(`.rules__input`);
    const btnBackElement = this.element.querySelector(`.back`);

    rulesInputElement.oninput = () => {
      if (rulesInputElement.value === ``) {
        rulesBtnElement.setAttribute(`disabled`, ``);
      } else {
        rulesBtnElement.removeAttribute(`disabled`);
      }
    };

    rulesBtnElement.onclick = (evt) => {
      evt.preventDefault();
      this.onRulesBtnClick();
    };

    btnBackElement.onclick = () => {
      this.onBtnBackClick();
    };
  }

  onRulesBtnClick() {

  }

  onBtnBackClick() {

  }
}
