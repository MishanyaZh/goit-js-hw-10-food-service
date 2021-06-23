import menu from '../menu.json';
import markupTpl from '../templates/markap.hbs';
// console.log(menu);
// console.log(markupTpl(menu[2]));

const menuContainerRef = document.querySelector(".js-menu");
// console.log(menuContainerRef);
const MenuCardsMarkup = createMenuCardsMarkup(menu);
// console.log(MenuCardsMarkup);
menuContainerRef.insertAdjacentHTML('beforeend', MenuCardsMarkup);

function createMenuCardsMarkup(menu) {
    return menu.map(markupTpl).join('');
}

const bodyRef = document.querySelector('body');

const themeSwitchToggle = document.querySelector("#theme-switch-toggle");
console.dir(themeSwitchToggle);

themeSwitchToggle.addEventListener('change', onThemeSwitchToggleKlick);

 const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
    
function onThemeSwitchToggleKlick(evt) {
   
    bodyRef.classList.toggle(Theme.DARK);
    // if (bodyRef.classList.contains(Theme.DARK)) {
    //     bodyRef.classList.toggle(Theme.LIGHT)
    // }

    
}