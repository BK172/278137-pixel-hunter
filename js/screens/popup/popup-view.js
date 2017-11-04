import AbstractView from '../../abstract-view';

export default class PopupView extends AbstractView {
  get template() {
    return `<div class="popup  hidden">
      <p class="popup__text">Внимание! Текущий прогресс будет потерян.<br>
        Вы уверены, что хотите покинуть игру?</p>
      <div class="popup__container">
        <a class="popup__btn  popup__btn--yes" href="#">Да</a>
        <a class="popup__btn  popup__btn--no" href="#">Нет</a>
      </div>
      <div class="popup__shadow"></div>
    </div>`;
  }

  bind() {
    const btnYesElement = this.element.querySelector(`.popup__btn--yes`);
    const btnNoElement = this.element.querySelector(`.popup__btn--no`);

    btnYesElement.onclick = () => {
      this.onBtnYesClick();
    };

    btnNoElement.onclick = () => {
      this.onBtnNoClick();
    };
  }

  onBtnYesClick() {

  }

  onBtnNoClick() {

  }
}
