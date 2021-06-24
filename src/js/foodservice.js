import menu from '../menu.json';
import markupTpl from '../templates/markap.hbs';
// console.log(menu);
// console.log(markupTpl(menu[2]));

const menuContainerRef = document.querySelector(".js-menu");
// console.log(menuContainerRef);

// create Markup
const MenuCardsMarkup = markupTpl(menu);
// console.log(MenuCardsMarkup);

//add markup in container
menuContainerRef.innerHTML = MenuCardsMarkup;

// function createMenuCardsMarkup(menu) {
//     return menu.map(markupTpl).join('');
// }

const bodyRef = document.querySelector('body');

const themeSwitchToggleRef = document.querySelector("#theme-switch-toggle");
// console.dir(themeSwitchToggle);

themeSwitchToggleRef.addEventListener('change', onThemeSwitchToggleKlick);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

bodyRef.classList.add(Theme.LIGHT);
let isLightTheme = bodyRef.classList.contains(Theme.LIGHT);

function onThemeSwitchToggleKlick(evt) {
   
    if (isLightTheme) {
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    } else bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);

    isLightTheme = !isLightTheme;   
}