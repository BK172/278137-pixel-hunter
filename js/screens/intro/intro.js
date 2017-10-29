import IntroView from './intro-view';
import greeting from '../greeting/greeting';
import {renderWindow} from '../../utils';

const intro = new IntroView();

intro.onIntroBtnClick = (evt) => {
  evt.preventDefault();
  renderWindow(greeting);
};

export default intro;
