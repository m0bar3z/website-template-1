var myNav = document.getElementById('main-navbar');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
    } 
    else {
        myNav.classList.remove("nav-colored");
    }
};