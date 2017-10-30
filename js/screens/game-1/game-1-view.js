import AbstractView from '../../abstract-view';
import getHeader from '../header';
import footer from '../footer';
import getStats from '../current-stats';

export default class GameView extends AbstractView {
  //constructor(games, data) {
  constructor(games, state) {
    super();
    this.games = games[state.level];
    //this.data = data;
    this.state = state;
  }

  get template() {
    //let gameTemplate = `${getHeader(this.data)}
    let gameTemplate = `${getHeader(this.state)}
      <div class="game">
        <p class="game__task">${this.games.task}</p>`;

        switch (this.games.type) {
          case `game1`:
            gameTemplate += `
        <form class="game__content">
          <div class="game__option">
            <img src="${this.games.questions[0].url}" alt="${this.games.questions[0].title}" width="${this.games.questions[0].width}" height="${this.games.questions[0].height}"/>
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
            <img src="${this.games.questions[1].url}" alt="${this.games.questions[1].title}" width="${this.games.questions[1].width}" height="${this.games.questions[1].height}"/>
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
            <img src="${this.games.questions[0].url}" alt="${this.games.questions[0].title}" width="${this.games.questions[0].width}" height="${this.games.questions[0].height}"/>
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
            <img src="${this.games.questions[0].url}" alt="${this.games.questions[0].title}" width="${this.games.questions[0].width}" height="${this.games.questions[0].height}"/>
          </div>
          <div class="game__option  game__option--selected" data-option="option2">
            <img src="${this.games.questions[1].url}" alt="${this.games.questions[1].title}" width="${this.games.questions[1].width}" height="${this.games.questions[1].height}"/>
          </div>
          <div class="game__option" data-option="option3">
            <img src="${this.games.questions[2].url}" alt="${this.games.questions[2].title}" width="${this.games.questions[2].width}" height="${this.games.questions[2].height}"/>
          </div>
        </form>`;
            break;
        }

        //gameTemplate += `<div class="stats">${getStats(this.data.answers)}</div>
        gameTemplate += `<div class="stats">${getStats(this.state.answers)}</div>
      </div>
      ${footer}`;

    return gameTemplate;
  }

  bind() {
    // this.element.querySelector(`.back`).onclick = (evt) => {
    //   evt.preventDefault();
    //   this.goBack();
    // };
    // this.element.querySelector(`.game__content`).onclick = (evt) => {
    //   this.onAnswerClick(this.element, evt);
    // };

    this.timeElement = this.element.querySelector(`.game__timer`);

    const gameForm = this.element.querySelector(`.game__content`);
    const btnBack = this.element.querySelector(`.back`);

    const onGameFormClick = (evt) => {
      // const gameType = this.games.type;
      const target = evt.target; //.parentNode;

      this.onAnswer(gameForm, this.state, target);

      // if (gameType === `game1` || gameType === `game2` && target.classList.contains(`game__answer`)) {
      //   this.onAnswer(this.state);
      // } else if (gameType === `game3` && target.classList.contains(`game__option`)) {
      //   this.onAnswer(this.state);
      // }
    };

    gameForm.addEventListener(`click`, onGameFormClick);
    btnBack.addEventListener(`click`, this.onBtnBackClick);
  }

  updateTime(time) {
    this.timeElement.textContent = time;
  }

  // onAnswer(state) {
  //   return state;
  // }

  onAnswer() {

  }

  onBtnBackClick() {

  }
}
