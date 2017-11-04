import App from '../../application';
import GameModel from './game-model';
import GameView from './game-view';
import {renderWindow, mainElement} from '../../utils';
import {TIMER_INTERVAL, TIME_LIMIT, initialData, resetGame} from '../../data/game-data';
import getTimer from '../../timer';
import PopupView from '../popup/popup-view';

class GameScreen {
  constructor(data) {
    this.model = new GameModel(data);
    this.view = new GameView(this.model);
    this.view.popup = new PopupView();

    this.view.onAnswer = (element, target) => this.onAnswer(element, target);
    this.view.onBtnBackClick = () => this.onBtnBackClick();
    this.view.popup.onPopupBtnYes = () => this.onPopupBtnYes();
    this.view.popup.onPopupBtnNo = () => this.onPopupBtnNo();
  }

  init(state = initialData) {
    this.model.update(state);
    this.view.updateLevel();
    renderWindow(this.view);
    mainElement.appendChild(this.view.popup.element);
    this.startTimer();
  }

  startTimer(time = TIME_LIMIT) {
    this.timer = setInterval(() => {
      time = getTimer(time).tick().time;
      this.model.tick(time);

      if (this.model.state.time < 1) {
        this.stopTimer();
        this.model.tick(TIME_LIMIT);
        this.model.answerWrong();
        this.chooseNextLevel();
      }

      if (this.model.state.time === 5) {
        this.view.flickTimer();
      }

      this.view.updateTime(this.model.state.time);
    }, TIMER_INTERVAL);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  chooseNextLevel() {
    if (this.model.state.lives >= 0 && this.model.state.level < this.model.data.length - 1) {
      this.model.nextLevel();
      App.showGame(this.model.state);
    } else {
      App.showStats(this.model.state);
    }
  }

  checkAnswer(checkCondition) {
    const answerTime = this.model.state.time;

    this.stopTimer();
    this.model.tick(TIME_LIMIT);

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

        if (target.parentNode.classList.contains(`game__option`)) {
          for (let item of answerItems) {
            item.classList.remove(`game__option--selected`);
          }

          target.parentNode.classList.add(`game__option--selected`);

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

  onBtnBackClick() {
    this.stopTimer();
    this.view.popup.showPopup();
  }

  onPopupBtnYes() {
    resetGame(this.model.state);
    this.view.popup.hidePopup();
    App.showGreeting();
  }

  onPopupBtnNo() {
    this.view.popup.hidePopup();
    this.startTimer(this.model.state.time);
  }
}

export default GameScreen;
