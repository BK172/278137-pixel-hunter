const getTimer = (time) => {
  if (time < 0) {
    return `time is up`;
  }

  if (typeof time !== `number`) {
    return 0;
  }

  return {
    time,
    tick() {
      return getTimer(time - 1);
    },
    reset() {
      return getTimer(0);
    }
  };
};

export default getTimer;
