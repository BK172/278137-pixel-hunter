const INITIAL_LIVES = 3;
const INITIAL_LEVEL = 0;
const INITIAL_ANSWERS = new Array(10).fill(`unknown`);

export const TIMER_INTERVAL = 1000;
export const TIME_LIMIT = 30;

export const initialData = {
  lives: INITIAL_LIVES,
  time: TIME_LIMIT,
  level: INITIAL_LEVEL,
  answers: INITIAL_ANSWERS.slice()
};

export const resetGame = (state) => {
  state.lives = INITIAL_LIVES;
  state.time = TIME_LIMIT;
  state.level = INITIAL_LEVEL;
  state.answers = INITIAL_ANSWERS.slice();
};

export const AnswerType = {
  PHOTO: `photo`,
  PAINT: `paint`
};

export const GameType = {
  SINGLE: `game2`,
  DOUBLE: `game1`,
  TRIPLE: `game3`
};

export let gameHistory = [];

export const addToHistory = (data) => {
  gameHistory.unshift(data);

  if (gameHistory.length > 2) {
    gameHistory.pop();
    gameHistory.unshift();
  }

  return gameHistory;
};
