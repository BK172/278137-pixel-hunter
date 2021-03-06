import AbstractView from '../../abstract-view';
import getHeader from '../header';
import footer from '../footer';
import getStats from '../current-stats';
import {initialData} from '../../data/game-data';
import {renderWindow} from '../../utils';

export default class GameView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.state = model.state || initialData;
    this.games = model.data[this.state.level];
  }

  get template() {
    let gameTemplate = `${getHeader(this.state)}
      <div class="game">
        <p class="game__task">${this.games.task}</p>`;

    switch (this.games.type) {
      case `game1`:
        gameTemplate += `
        <form class="game__content">
          <div class="game__option">
            <img src="${this.games.questions[0].url}" alt="Option 1" width="${this.games.questions[0].width}" height="${this.games.questions[0].height}"/>
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo"/>
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="paint"/>
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src="${this.games.questions[1].url}" alt="Option 2" width="${this.games.questions[1].width}" height="${this.games.questions[1].height}"/>
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo"/>
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="paint"/>
              <span>Рисунок</span>
            </label>
          </div>
        </form>`;
        break;
      case `game2`:
        gameTemplate += `
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${this.games.questions[0].url}" alt="Option 1" width="${this.games.questions[0].width}" height="${this.games.questions[0].height}"/>
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo"/>
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="paint"/>
              <span>Рисунок</span>
            </label>
          </div>
        </form>`;
        break;
      case `game3`:
        gameTemplate += `
        <form class="game__content  game__content--triple">
          <div class="game__option" data-option="option1">
            <img src="${this.games.questions[0].url}" alt="Option 1" width="${this.games.questions[0].width}" height="${this.games.questions[0].height}"/>
          </div>
          <div class="game__option  game__option--selected" data-option="option2">
            <img src="${this.games.questions[1].url}" alt="Option 2" width="${this.games.questions[1].width}" height="${this.games.questions[1].height}"/>
          </div>
          <div class="game__option" data-option="option3">
            <img src="${this.games.questions[2].url}" alt="Option 3" width="${this.games.questions[2].width}" height="${this.games.questions[2].height}"/>
          </div>
        </form>`;
        break;
    }

    gameTemplate += `<div class="stats">${getStats(this.state.answers)}</div>
      </div>
      ${footer}`;

    return gameTemplate;
  }

  bind() {
    this.updateControls();

    return super.bind();
  }

  updateLevel() {
    renderWindow(new GameView(this.model), this.element);
    this.updateControls();
  }

  updateControls() {
    this.timeElement = this.element.querySelector(`.game__timer`);
    const gameFormElement = this.element.querySelector(`.game__content`);
    const btnBackElement = this.element.querySelector(`.back`);

    gameFormElement.onclick = (evt) => {
      this.onAnswer(this.element, evt.target);
    };

    btnBackElement.onclick = () => {
      this.onBtnBackClick();
    };
  }

  updateTime(time) {
    this.timeElement.textContent = time;
  }

  flickTimer() {
    this.timeElement.classList.add(`game__timer--animated`);
  }

  onAnswer() {

  }

  onBtnBackClick() {

  }
}
