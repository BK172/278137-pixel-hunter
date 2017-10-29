import assert from 'assert';
import {getScore} from './get-score';

describe(`Summary results`, () => {
  it(`should return 1150 if all answers are correct, not fast, not slow and 3 lives left`, () => {
    const answers = new Array(10).fill(`correct`);

    assert.equal(getScore(answers, 3).total, 1150);
  });

  it(`should return 1050 if 1 fast, 2 slow, 7 correct answers and 2 lives left`, () => {
    const answers = [`correct`, `correct`, `correct`, `slow`, `correct`, `correct`, `correct`, `correct`, `slow`, `fast`];

    assert.equal(getScore(answers, 2).total, 1050);
  });

  it(`should return 1000 if 2 fast, 3 slow, 5 correct answers and 1 live left`, () => {
    const answers = [`slow`, `fast`, `slow`, `correct`, `correct`, `fast`, `correct`, `correct`, `slow`, `correct`];

    assert.equal(getScore(answers, 1).total, 1000);
  });

  it(`should return 1650 if all answers are fast and 3 lives left`, () => {
    const answers = new Array(10).fill(`fast`);

    assert.equal(getScore(answers, 3).total, 1650);
  });
});
