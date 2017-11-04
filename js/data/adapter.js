import {GameType, AnswerType} from './game-data';

const GameTypes = {
  'tinder-like': GameType.SINGLE,
  'two-of-two': GameType.DOUBLE,
  'one-of-three': GameType.TRIPLE
};

const AnswerTypes = {
  'photo': AnswerType.PHOTO,
  'painting': AnswerType.PAINT
};

const adapt = (data) => {
  return data.map(({type, question, answers}) => {
    return {
      type: GameTypes[type],
      task: question,
      questions: answers.map(({image, type: imageType}) => {
        return {
          url: image.url,
          width: image.width,
          height: image.height,
          answer: AnswerTypes[imageType]
        };
      })
    };
  });
};

export default adapt;
