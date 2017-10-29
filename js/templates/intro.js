import getElementFromTemplate from '../utils';
import renderWindow from '../render-window';
import greetingTemplate from './greeting';

export default () => {
  const templateIntro = getElementFromTemplate(`<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>`);

  const introControl = templateIntro.querySelector(`.intro__asterisk`);

  introControl.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    const greeting = greetingTemplate();
    renderWindow(greeting);
  });

  return templateIntro;
};
