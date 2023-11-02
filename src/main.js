
const buttonMobMenu = document.querySelector(`.button-mob-menu`);
const menuBox = document.querySelector(`.menu-box`);
const buttonMenu = document.querySelector(`.button-menu`);

buttonMenu.addEventListener("click", function(e){
    buttonMobMenu.classList.toggle("is-open");
    menuBox.classList.toggle("is-open");
}
)
buttonMobMenu.addEventListener("click", function(e){
    buttonMenu.classList.toggle("is-open");
    menuBox.classList.toggle("is-open");
}
)



