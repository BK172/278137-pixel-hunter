import assert from 'assert';
import getTimer from './timer';

describe(`Get timer`, () => {
  it(`should return 1 if time is 2`, () => {
    assert.equal(getTimer(2).tick().time, 1);
  });

  it(`should return 10 if time is 11`, () => {
    assert.equal(getTimer(11).tick().time, 10);
  });

  it(`should return 19 if time is 20`, () => {
    assert.equal(getTimer(20).tick().time, 19);
  });

  it(`should return 29 if time is 30`, () => {
    assert.equal(getTimer(30).tick().time, 29);
  });

  it(`should return 'time is up' if time is 1`, () => {
    assert.equal(getTimer(1).tick(), `time is up`);
  });
});
