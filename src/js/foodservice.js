import menu from '../menu.json';
import markupTpl from '../templates/markap.hbs';

const menuContainerRef = document.querySelector(".js-menu");

// create Markup
const MenuCardsMarkup = markupTpl(menu);


//add markup in container
menuContainerRef.innerHTML = MenuCardsMarkup;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// 1. ссилки на елементи
const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector("#theme-switch-toggle");

// 2. слушатель на checkbox
checkboxRef.addEventListener('change', checkboxValue);

// 3. проверка checkbox значения
function checkboxValue (evt) {
    const checkboxValueCurrent = evt.currentTarget.checked;
    
    if (checkboxValueCurrent === true) {
        checkedTrue()
        console.log("+");
    } else {
        checkedFalse()
        console.log('-');
    }
}

// 4. якшо true то DARK
function checkedTrue() {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    checkboxRef.checked = true;
}

// 5. якщо false LIGHT
function checkedFalse() {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    checkboxRef.checked = false;
}

// 6. якщо ще немає вибору, або вибір вже localStorage. початкові дані. або збережені !!!

function defoltOrMyTheme() {

    const myTheme = localStorage.getItem('theme');

    if (myTheme === Theme.LIGHT || myTheme === null) {
        checkedFalse();
        return;
    }

    if (myTheme === Theme.DARK) {
        checkedTrue();
        return;
    }
}

// відразу запуск на перевірку localStorage. або якщо 1й вхід
defoltOrMyTheme();



// чорновик------------------------------------------------------------

// const bodyRef = document.querySelector('body');
// const themeSwitchToggleRef = document.querySelector("#theme-switch-toggle");

// themeSwitchToggleRef.addEventListener('change', onThemeSwitchToggleKlick);



// bodyRef.classList.add(Theme.LIGHT);
// // let isLightTheme = bodyRef.classList.contains(Theme.LIGHT);

// function onThemeSwitchToggleKlick(evt) {
    

//     const checkedValue = themeSwitchToggleRef.checked;
//     // console.log(checkedValue);

//     if (checkedValue === true) {
//         bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
//         localStorage.setItem('checked-Value', checkedValue);
//     } else {
//         bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
//         localStorage.setItem('checked-Value', checkedValue);
//     }

// }

// localStorageValue()
// function localStorageValue(evt) {

//     const savedCheckedValue = localStorage.getItem('checked-Value');
//     // console.log(savedCheckedValue);
//     if (savedCheckedValue === true) {
//             bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
//     } else {bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);}

// }





   
