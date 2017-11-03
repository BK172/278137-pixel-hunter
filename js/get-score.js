const CORRECT_POINTS = 100;
const FAST_POINTS = 50;
const SLOW_POINTS = 50;
const LIVE_POINTS = 50;

export const getScore = (answers, lives) => {
  const livesFixed = lives === -1 ? 0 : lives;

  let score = {
    correct: 0,
    fast: 0,
    slow: 0,
    lives: 0,
    total: 0
  };

  for (let item of answers) {
    switch (item) {
      case `correct`:
        score.correct += CORRECT_POINTS;
        score.total += CORRECT_POINTS;
        break;
      case `fast`:
        score.correct += CORRECT_POINTS;
        score.fast += FAST_POINTS;
        score.total += CORRECT_POINTS + FAST_POINTS;
        break;
      case `slow`:
        score.correct += CORRECT_POINTS;
        score.slow += SLOW_POINTS;
        score.total += CORRECT_POINTS - SLOW_POINTS;
        break;
    }
  }

  score.lives = livesFixed * LIVE_POINTS;
  score.total += score.lives;
  score.slow = score.slow === 0 ? 0 : -score.slow;

  return score;
};

export const getScoreCount = (answers) => {
  let count = {
    correct: 0,
    fast: 0,
    slow: 0
  };

  for (let item of answers) {
    switch (item) {
      case `correct`:
        count.correct++;
        break;
      case `fast`:
        count.fast++;
        break;
      case `slow`:
        count.slow++;
        break;
    }
  }

  return count;
};
