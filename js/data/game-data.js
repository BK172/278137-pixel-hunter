export const TIMER_INTERVAL = 1000;

export const TIME_LIMIT = 30;

const INITIAL_LIVES = 3;
const INITIAL_LEVEL = 0;
const INITIAL_ANSWERS = new Array(10).fill(`unknown`);

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

export let gameHistory = [];

export const addToHistory = (data) => {
  gameHistory.push(data);

  if (gameHistory.length > 2) {
    gameHistory.shift();
  }

  return gameHistory;
};

export const games = [
  {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    type: `game1`,
    questions: [
      {
        title: `Option 1`,
        url: `https://k42.kn3.net/CF42609C8.jpg`,
        width: 468,
        height: 458,
        answer: `paint`
      }, {
        title: `Option 2`,
        url: `https://k42.kn3.net/D2F0370D6.jpg`,
        width: 468,
        height: 458,
        answer: `photo`
      },
    ]
  },
  {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    type: `game1`,
    questions: [
      {
        title: `Option 1`,
        url: `https://k32.kn3.net/5C7060EC5.jpg`,
        width: 468,
        height: 458,
        answer: `paint`
      }, {
        title: `Option 2`,
        url: `http://i.imgur.com/1KegWPz.jpg`,
        width: 468,
        height: 458,
        answer: `photo`
      },
    ]
  },
  {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    type: `game1`,
    questions: [
      {
        title: `Option 1`,
        url: `https://i.imgur.com/DiHM5Zb.jpg`,
        width: 468,
        height: 458,
        answer: `paint`
      }, {
        title: `Option 2`,
        url: `http://i.imgur.com/DKR1HtB.jpg`,
        width: 468,
        height: 458,
        answer: `photo`
      },
    ]
  },
  {
    task: `Угадай, фото или рисунок?`,
    type: `game2`,
    questions: [
      {
        title: `Option 1`,
        url: `https://k32.kn3.net/5C7060EC5.jpg`,
        width: 705,
        height: 455,
        answer: `photo`
      }
    ]
  },
  {
    task: `Угадай, фото или рисунок?`,
    type: `game2`,
    questions: [
      {
        title: `Option 1`,
        url: `http://i.imgur.com/1KegWPz.jpg`,
        width: 705,
        height: 455,
        answer: `photo`
      }
    ]
  },
  {
    task: `Угадай, фото или рисунок?`,
    type: `game2`,
    questions: [
      {
        title: `Option 1`,
        url: `https://i.imgur.com/DiHM5Zb.jpg`,
        width: 705,
        height: 455,
        answer: `photo`
      }
    ]
  },
  {
    task: `Угадай, фото или рисунок?`,
    type: `game2`,
    questions: [
      {
        title: `Option 1`,
        url: `http://i.imgur.com/DKR1HtB.jpg`,
        width: 705,
        height: 455,
        answer: `photo`
      }
    ]
  },
  {
    task: `Найдите рисунок среди изображений`,
    type: `game3`,
    questions: [
      {
        title: `Option 1`,
        url: `https://k42.kn3.net/CF42609C8.jpg`,
        width: 304,
        height: 455,
        answer: `photo`
      }, {
        title: `Option 2`,
        url: `https://k42.kn3.net/D2F0370D6.jpg`,
        width: 304,
        height: 455,
        answer: `paint`
      }, {
        title: `Option 3`,
        url: `http://i.imgur.com/DKR1HtB.jpg`,
        width: 304,
        height: 455,
        answer: `photo`
      }
    ]
  },
  {
    task: `Найдите рисунок среди изображений`,
    type: `game3`,
    questions: [
      {
        title: `Option 1`,
        url: `https://k32.kn3.net/5C7060EC5.jpg`,
        width: 304,
        height: 455,
        answer: `photo`
      }, {
        title: `Option 2`,
        url: `http://i.imgur.com/1KegWPz.jpg`,
        width: 304,
        height: 455,
        answer: `paint`
      }, {
        title: `Option 3`,
        url: `https://i.imgur.com/DiHM5Zb.jpg`,
        width: 304,
        height: 455,
        answer: `photo`
      }
    ]
  },
  {
    task: `Найдите рисунок среди изображений`,
    type: `game3`,
    questions: [
      {
        title: `Option 1`,
        url: `https://k42.kn3.net/CF42609C8.jpg`,
        width: 304,
        height: 455,
        answer: `photo`
      }, {
        title: `Option 1`,
        url: `https://k42.kn3.net/D2F0370D6.jpg`,
        width: 304,
        height: 455,
        answer: `paint`
      }, {
        title: `Option 1`,
        url: `http://i.imgur.com/DKR1HtB.jpg`,
        width: 304,
        height: 455,
        answer: `photo`
      }
    ]
  }
];
