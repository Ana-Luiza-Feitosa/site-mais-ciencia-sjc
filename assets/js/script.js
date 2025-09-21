'use strict';



/*navbar alternar*/
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElement = [navOpenBtn, navCloseBtn];

function abreNavbar(){
    navbar.classList.toggle("active");
}

for(let i=0; i< navElement.length;i++){
    navElement[i].addEventListener("click", abreNavbar);
}

const mql = window.matchMedia('(min-width: 992px)');
const normalize = e => { if (e.matches) navbar.classList.remove('active'); };
mql.addEventListener('change', normalize);
normalize(mql);
