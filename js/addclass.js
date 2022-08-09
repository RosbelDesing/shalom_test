//añadir clase activa al menu de navegacion para que se marque
const list = document.querySelectorAll('.link-menu');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('on'));
    this.classList.add('on');
}

list.forEach((item) =>
item.addEventListener('click',activeLink));

