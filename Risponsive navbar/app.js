 
 
const listitem = document.querySelector(".listitem")
const icon = document.querySelector(".icon")
const hambar = document.querySelector(".ri-menu-fill")



// console.log(wondowWidth);

function navbar() {
    const wondowWidth = window.innerWidth;
    if (wondowWidth <= 848) {
        listitem.style.display = "none";
        icon.style.display = "none";
        hambar.style.display = "block";

    } else {
        listitem.style.display = "block";
        icon.style.display = "block";
        hambar.style.display = "none";
    }
}
// console.log(navbar);


window.addEventListener("resize" , navbar)




