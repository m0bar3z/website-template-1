let myNav = document.getElementById('main-navbar');
let dropDownMenu = document.getElementById('dropdown-menu');
let dropDownItems = document.getElementsByClassName("dropdown-item");
window.onscroll = function () { 
    console.log(dropDownMenu);
    if (window.pageYOffset >= 100 ) {
        myNav.classList.add("nav-colored");
        dropDownMenu.classList.add("nav-colored");
    } 
    else {
        myNav.classList.remove("nav-colored");
        dropDownMenu.classList.remove("nav-colored");
    }
};

