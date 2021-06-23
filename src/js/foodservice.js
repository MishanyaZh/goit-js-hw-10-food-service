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
