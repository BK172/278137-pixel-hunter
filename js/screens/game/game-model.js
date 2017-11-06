export default class GameModel {
  constructor(data) {
    this.data = data;
  }

  start(startState) {
    this.update(startState);
  }

  update(newState) {
    this.state = newState;

    return this.state;
  }

  nextLevel() {
    this.state.level++;
    this.update(this.state);
  }

  checkAnswerTime(timeOfAnswer) {
    switch (true) {
      case timeOfAnswer > 20:
        this.state.answers.splice(this.state.level, 1, `fast`);
        break;
      case timeOfAnswer < 10:
        this.state.answers.splice(this.state.level, 1, `slow`);
        break;
      default:
        this.state.answers.splice(this.state.level, 1, `correct`);
    }

    this.update(this.state);
  }

  answerWrong() {
    this.state.answers.splice(this.state.level, 1, `wrong`);
    this.state.lives--;
    this.update(this.state);
  }

  tick(time) {
    this.state.time = time;
    this.update(this.state);
  }
}
