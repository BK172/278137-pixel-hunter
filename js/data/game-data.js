const getScore = (answers, lives) => {
  const correctPoints = 100;
  const fastPoints = 50;
  const slowPoints = -50;
  const livePoints = 50;
  const gameFailed = -1;

  if (answers.indexOf(`wrong`) !== -1 || lives < 0) {
    return gameFailed;
  }

  let score = lives * livePoints;

  answers.forEach((item) => {
    switch (item) {
      case `correct`:
        score += correctPoints;
        break;
      case `fast`:
        score += correctPoints + fastPoints;
        break;
      case `slow`:
        score += correctPoints + slowPoints;
        break;
    }
  });

  return score;
};

export default getScore;
