const getTimer = (time) => {
  if (time === 0) {
    return `time is up`;
  }

  return {
    time,
    tick() {
      return getTimer(time - 1);
    }
  };
};

export default getTimer;
