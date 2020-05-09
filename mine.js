let header_nav_phone_content = document.getElementsByClassName("header_nav_phone_content")[0];
let header_nav_burgermenu = document.getElementsByClassName("header_nav_burgermenu")[0];

header_nav_burgermenu.onclick = show;

function show(){
    header_nav_phone_content.style.display = "block";
    header_nav_burgermenu.onclick = hide;
}
function hide(){
    header_nav_phone_content.style.display = "none";
    header_nav_burgermenu.onclick = show;
}