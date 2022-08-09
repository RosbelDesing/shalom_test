//Cambiar color de nav-bar al hacer scroll

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("header-black",window.scrollY>0);
})