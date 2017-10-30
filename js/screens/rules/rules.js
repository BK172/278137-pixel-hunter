import RulesView from './rules-view';
import greeting from '../greeting/greeting';
import {renderWindow} from '../../utils';

import startGame from '../game-1/game-1';

const rules = new RulesView();

rules.onRulesBtnClick = (evt) => {
  evt.preventDefault();
  renderWindow(startGame());
};

rules.onBtnBackClick = (evt) => {
  evt.preventDefault();
  renderWindow(greeting);
};

export default rules;
