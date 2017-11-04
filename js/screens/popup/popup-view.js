import AbstractView from '../../abstract-view';

export default class PopupView extends AbstractView {
  get template() {
    return `<div class="popup  hidden">
      <p class="popup__text">Внимание! Текущий прогресс будет потерян.<br>
        Вы уверены, что хотите покинуть игру?</p>
      <div class="popup__container">
        <a class="popup__btn  popup__btn--yes">Да</a>
        <a class="popup__btn  popup__btn--no">Нет</a>
      </div>
    </div>
    <div class="overlay hidden"></div>`;
  }

  bind() {
    this.popupElement = this.element.querySelector(`.popup`);
    this.overlayElement = this.element.querySelector(`.overlay`);
    const btnYesElement = this.popupElement.querySelector(`.popup__btn--yes`);
    const btnNoElement = this.popupElement.querySelector(`.popup__btn--no`);

    btnYesElement.onclick = () => {
      this.onPopupBtnYes();
    };

    btnNoElement.onclick = () => {
      this.onPopupBtnNo();
    };
  }

  showPopup() {
    this.popupElement.classList.remove(`hidden`);
    this.overlayElement.classList.remove(`hidden`);
  }

  hidePopup() {
    this.popupElement.classList.add(`hidden`);
    this.overlayElement.classList.add(`hidden`);
  }

  onPopupBtnYes() {

  }

  onPopupBtnNo() {

  }
}
