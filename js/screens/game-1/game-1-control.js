export const checkGameType = (gameType) => {
  switch (gameType) {
    case `game1`:
      checkGame1();
      break;
    case `game2`:
      checkGame2();
      break;
    case `game3`:
      checkGame3();
      break;
  }
};

export const checkAnswer = (checkCondition) => {
  if (checkCondition) {
    currentData.stats.splice(currentData.gameNum, 1, `wrong`);
    currentData.lives--;
  } else {
    currentData.stats.splice(currentData.gameNum, 1, `correct`);
  }

  if (currentData.lives >= 1) {
    if (currentData.gameNum < currentData.stats.length - 1) {
      currentData.gameNum++;
      checkGameType();
    } else if (currentData.gameNum === currentData.stats.length - 1) {
      renderTemplate(statsTemplate, true);
    }
  } else {
    renderTemplate(statsTemplate, true);
  }
};
