export const TIMER_INTERVAL = 1000;
export const TIME_LIMIT = 30;

export const AnswerType = {
  PHOTO: `photo`,
  PAINT: `paint`
};

export const GameType = {
  SINGLE: `game2`,
  DOUBLE: `game1`,
  TRIPLE: `game3`
};

export const initialData = {
  lives: 3,
  time: TIME_LIMIT,
  level: 0,
  answers: new Array(10).fill(`unknown`)
};

export const resetGame = (state) => {
  state.lives = initialData.lives;
  state.time = initialData.time;
  state.level = initialData.level;
  state.answers = initialData.answers.slice();
};
