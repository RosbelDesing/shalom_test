const listElement_1 = document.querySelector('.submenu--show-1');
const listElement_2 = document.querySelector('.submenu--show-2');
const listElement_3 = document.querySelector('.submenu--show-3');
const listElement_4 = document.querySelector('.submenu--show-4');
const listElement_5 = document.querySelector('.submenu--show-5');

const submenu_1 = document.querySelector('.submenu-1');
const submenu_2 = document.querySelector('.submenu-2');
const submenu_3 = document.querySelector('.submenu-3');
const submenu_4 = document.querySelector('.submenu-4');
const submenu_5 = document.querySelector('.submenu-5');

const arrow_1 = document.querySelector('.arrow-1 ion-icon');
const arrow_2 = document.querySelector('.arrow-2 ion-icon');
const arrow_3 = document.querySelector('.arrow-3 ion-icon');
const arrow_4 = document.querySelector('.arrow-4 ion-icon');
const arrow_5 = document.querySelector('.arrow-5 ion-icon');

listElement_1.addEventListener('click', () => {
    submenu_1.classList.toggle('shown-1');
    arrow_1.classList.toggle('rotate');
});

listElement_2.addEventListener('click', () => {
    submenu_2.classList.toggle('shown-2');
    arrow_2.classList.toggle('rotate');
});

listElement_3.addEventListener('click', () => {
    submenu_3.classList.toggle('shown-3');
    arrow_3.classList.toggle('rotate');
});

listElement_4.addEventListener('click', () => {
    submenu_4.classList.toggle('shown-4');
    arrow_4.classList.toggle('rotate');
});

listElement_5.addEventListener('click', () => {
    submenu_5.classList.toggle('shown-5');
    arrow_5.classList.toggle('rotate');
});



