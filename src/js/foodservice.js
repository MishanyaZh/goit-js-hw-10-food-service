import menu from '../menu.json';
import markupTpl from '../templates/markap.hbs';
// console.log(menu);
// console.log(markupTpl);

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
// console.dir(themeSwitchToggleRef);

themeSwitchToggleRef.addEventListener('change', onThemeSwitchToggleKlick);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

bodyRef.classList.add(Theme.LIGHT);
// let isLightTheme = bodyRef.classList.contains(Theme.LIGHT);

// localStorageValue()

function onThemeSwitchToggleKlick(evt) {
    
    // if (isLightTheme) {
    //     bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    // } else bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);

    // isLightTheme = !isLightTheme;   

    const checkedValue = themeSwitchToggleRef.checked;
    // console.log(checkedValue);

    if (checkedValue) {
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    } else bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);

    // checkedValue = !checkedValue;   
    
    // console.log(bodyRef.classList.value);



    // const checkedValue = themeSwitchToggleRef.checked;
    // console.log(checkedValue);
    localStorage.setItem('checked-Value', checkedValue);
    const savedCheckedValue = localStorage.getItem('checked-Value');
    console.log(savedCheckedValue);

    

}

function localStorageValue(evt) {

    // const savedCheckedValue = localStorage.getItem('checked-Value');
    // console.log(savedCheckedValue);
    // if (savedCheckedValue) {
    //         bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    // } else bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);

    }



   
