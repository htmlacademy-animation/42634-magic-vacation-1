// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const pageBody = document.querySelector(`body`);

const onLoadPage = () => {
  pageBody.classList.add(`loaded`);
};

document.addEventListener(`load`, onLoadPage());

if (pageBody.classList.contains(`loaded`)) {
  document.removeEventListener(`load`, onLoadPage());
}

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const rulesText = document.querySelectorAll(`.rules__item p`);

for (let i = 0; i < rulesText.length; i++) {
  const rulesLink = document.querySelector(`.rules__link`);

  rulesText[rulesText.length - 1].addEventListener(`animationend`, () => {
    rulesLink.classList.remove(`visually-hidden`);
    rulesLink.style.animationName = `MoveLeftTextAnimation`;
    rulesLink.style.animationDuration = `0.6s`;
  });
}
