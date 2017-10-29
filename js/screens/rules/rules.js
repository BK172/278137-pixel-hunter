import RulesView from './rules-view';
import greeting from '../greeting/greeting';
import {renderWindow} from '../../utils';

const rules = new RulesView();

rules.onRulesBtnClick = (evt) => {
  evt.preventDefault();
  // renderTemplate(game1Template);
};

rules.onBtnBackClick = (evt) => {
  evt.preventDefault();
  renderWindow(greeting);
};

export default rules;
