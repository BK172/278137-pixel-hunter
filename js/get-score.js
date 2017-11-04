const Points = {
  CORRECT: 100,
  FAST: 50,
  SLOW: 50,
  LIVE: 50
};

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
        score.correct += Points.CORRECT;
        score.total += Points.CORRECT;
        break;
      case `fast`:
        score.correct += Points.CORRECT;
        score.fast += Points.FAST;
        score.total += Points.CORRECT + Points.FAST;
        break;
      case `slow`:
        score.correct += Points.CORRECT;
        score.slow += Points.SLOW;
        score.total += Points.CORRECT - Points.SLOW;
        break;
    }
  }

  score.lives = livesFixed * Points.LIVE;
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
