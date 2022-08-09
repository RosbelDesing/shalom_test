const btn_toggle = document.getElementById('btn-toggle');
const navMenu = document.querySelector('.nav-menu');
const label = document.querySelector('.label');

btn_toggle.addEventListener('click',() => {
    navMenu.classList.toggle('active');
    label.classList.toggle('visible');
})