import App from '../../application';
import GameModel from './game-model';
import GameView from './game-view';
import {renderWindow} from '../../utils';
import {TIMER_INTERVAL, TIME_LIMIT, initialData, games, resetGame} from '../../data/game-data';
import getTimer from '../../timer';

class GameScreen {
  constructor(data = games) {
    this.model = new GameModel(data);
    this.view = new GameView(this.model);

    this.view.onAnswer = (element, target) => this.onAnswer(element, target);
    this.view.onBtnBackClick = (evt) => this.onBtnBackClick(evt);
  }

  init(state = initialData) {
    this.model.update(state);
    this.view.updateLevel();
    renderWindow(this.view);
    this.startTimer();
  }

  startTimer() {
    let time = TIME_LIMIT;

    this.timer = setInterval(() => {
      time = getTimer(time).tick().time;
      this.model.tick(time);

      if (this.model.state.time < 1) {
        this.stopTimer();
        this.model.answerWrong();
        this.chooseNextLevel();
      }

      this.view.updateTime(this.model.state.time);
    }, TIMER_INTERVAL);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.model.state.time = TIME_LIMIT;
  }

  chooseNextLevel() {
    if (this.model.state.lives >= 0 && this.model.state.level < this.model.data.length - 1) {
      this.model.nextLevel();
      this.view.updateLevel();
      this.startTimer();
    } else {
      App.showStats(this.model.state);
    }
  }

  checkAnswer(checkCondition) {
    const answerTime = this.model.state.time;

    this.stopTimer();

    if (checkCondition) {
      this.model.answerWrong();
    } else {
      this.model.checkAnswerTime(answerTime);
    }

    this.chooseNextLevel();
  }

  onAnswer(element, target) {
    const container = element.querySelector(`.game__content`);
    const levelType = this.model.data[this.model.state.level].type;

    switch (levelType) {
      case `game1`:
        const answerElements = container.querySelectorAll(`.game__answer :checked`);

        if (answerElements.length === 2) {
          const result1 = container.querySelector(`input[name="question1"]:checked`);
          const result2 = container.querySelector(`input[name="question2"]:checked`);
          const rightAnswer1 = this.model.data[this.model.state.level].questions[0].answer;
          const rightAnswer2 = this.model.data[this.model.state.level].questions[1].answer;

          if (result1 && result2 && true) {
            const answer1 = result1.value === rightAnswer1 ? `correct` : `wrong`;
            const answer2 = result2.value === rightAnswer2 ? `correct` : `wrong`;

            this.checkAnswer((answer1 === `wrong` || answer2 === `wrong`), this.model.state);
          }
        }
        break;
      case `game2`:
        if (target.name === `question1` && target.checked) {
          const rightAnswer1 = this.model.data[this.model.state.level].questions[0].answer;
          const answer1 = target.value === rightAnswer1 ? `correct` : `wrong`;

          this.checkAnswer((answer1 === `wrong`), this.model.state);
        }
        break;
      case `game3`:
        const answerItems = container.querySelectorAll(`.game__option`);
        let answer1;

        if (target.classList.contains(`game__option`)) {
          for (let item of answerItems) {
            item.classList.remove(`game__option--selected`);
          }

          target.classList.add(`game__option--selected`);

          for (let i = 0; i < answerItems.length; i++) {
            if (answerItems[i].classList.contains(`game__option--selected`)) {
              const chosenImgType = this.model.data[this.model.state.level].questions[i].answer;

              answer1 = chosenImgType === `paint` ? `correct` : `wrong`;
              break;
            }
          }

          this.checkAnswer((answer1 === `wrong`), this.model.state);
        }
        break;
    }
  }

  onBtnBackClick(evt) {
    evt.preventDefault();

    this.stopTimer();
    resetGame(this.model.state);
    App.showGreeting();
  }
}

export default new GameScreen();
