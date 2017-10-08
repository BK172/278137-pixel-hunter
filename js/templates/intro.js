import getElementFromTemplate from '../utils.js';
import renderWindow from '../render-window.js';
import {greetingTemplate, renderRules} from './greeting.js';

const introTemplate = getElementFromTemplate(`<div id="intro" class="intro">
<h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`);

const renderGreeting = () => {
  const introControl = document.querySelector(`.intro__asterisk`);

  introControl.addEventListener(`click`, () => {
    renderWindow(greetingTemplate);
    renderRules();
  });
};

export {introTemplate, renderGreeting};
