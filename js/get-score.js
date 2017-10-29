export const getScore = (answers, lives) => {
  const correctPoints = 100;
  const fastPoints = 50;
  const slowPoints = 50;
  const livePoints = 50;

  let score = {
    correct: 0,
    fast: 0,
    slow: 0,
    lives: 0,
    total: 0
  };

  answers.forEach((item) => {
    switch (item) {
      case `correct`:
        score.correct += correctPoints;
        score.total += correctPoints;
        break;
      case `fast`:
        score.fast += correctPoints + fastPoints;
        score.total += correctPoints + fastPoints;
        break;
      case `slow`:
        score.slow += correctPoints + slowPoints;
        score.total -= correctPoints + slowPoints;
        break;
    }
  });

  score.lives = lives * livePoints;
  score.total += score.lives;

  return score;
};
