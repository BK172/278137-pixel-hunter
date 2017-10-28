import getElementFromTemplate from '../utils';
// import renderWindow from '../render-window';
// import getHeader from './header-nostat';
import rulesTemplate from './rules';
import {renderTemplate} from '../main';

export default () => {
  const templateGreeting = getElementFromTemplate(`<div class="greeting central--blur">
  <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
  <h1 class="greeting__asterisk">*</h1>
  <div class="greeting__challenge">
    <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
    <p>Правила игры просты.<br>
      Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
      Задача кажется тривиальной, но не думай, что все так просто.<br>
      Фотореализм обманчив и коварен.<br>
      Помни, главное — смотреть очень внимательно.</p>
  </div>
  <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`);

  const greetingControl = templateGreeting.querySelector(`.greeting__continue`);

  greetingControl.addEventListener(`click`, () => {
    // const rules = rulesTemplate();
    // const gameHeader = getHeader();
    // rules.prepend(gameHeader);
    // renderWindow(rules);
    renderTemplate(rulesTemplate, true);
  });

  return templateGreeting;
};
