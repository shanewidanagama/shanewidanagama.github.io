//execute pinNavbar when user scrolls
window.onscroll = function() {pinNavbar()};

//get navBar
var navbar = document.getElementById("navbar");
//get navbar offest position
var sticky = navbar.offsetTop;

//add 'sticky' class when scrolling. remove when in starting postion
function pinNavbar() {
if(window.pageYOffset >= sticky) {
navbar.classList.add("sticky");
}
else {
navbar.classList.remove("sticky");
}
}
