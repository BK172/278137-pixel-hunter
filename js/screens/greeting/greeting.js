import GreetingView from './greeting-view';
import rules from '../rules/rules';
import {renderWindow} from '../../utils';

const greeting = new GreetingView();

greeting.onGreetingBtnClick = (evt) => {
  evt.preventDefault();

  renderWindow(rules);
};

export default greeting;
