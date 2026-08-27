const start = document.getElementById("start");
const startMenu = document.getElementById("start-menu");
const menu = document.getElementById("menu");
let startTimeout = null;
let menuTimeout = null;
start.addEventListener("click", () => {
    if (startMenu.style.opacity === "1" || startMenu.style.transform === "translate(-50%,-50%) scale(1)") {
        clearTimeout(startTimeout);
        startMenu.style.opacity = "0";
        startMenu.style.transform = "translate(-50%,-50%) scale(0.8)";
        startTimeout = setTimeout(() => {
            startMenu.style.visibility = "hidden";
        },500)
    }
    else {
        clearTimeout(startTimeout);
        startMenu.style.visibility = "visible";
        startMenu.style.opacity = "1";
        startMenu.style.transform = "translate(-50%,-50%) scale(1)";
    }
});
document.addEventListener("click",(e) => {
    if (e.target.closest("#start") || e.target.closest("#start-menu")) {
        return;
    }
    startMenu.style.opacity = "0";
    startMenu.style.transform = "translate(-50%,-50%) scale(0.8)";
    startTimeout = setTimeout(() => {
        startMenu.style.visibility = "hidden";
    },500)
})
document.addEventListener("contextmenu",(e) => {
    clearTimeout(menuTimeout);
    e.preventDefault();
    let x = e.clientX + "px";
    let y = e.clientY + "px";
    menu.style.left = x;
    menu.style.top = y;
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menu.style.transform = "translate(-50%,-50%) scale(1)";
})
document.addEventListener("click",(e) => {
    clearTimeout(menuTimeout);
    if (e.target.closest("#menu")) {
        return;
    }
    menu.style.opacity = "0";
    menu.style.transform = "translate(-50%,-50%) scale(0.8)";
    menuTimeout = setTimeout(() => {
        menu.style.visibility = "hidden";
    },500)
})
function hiddenMenu() {
    menu.style.opacity = "0";
    menu.style.transform = "translate(-50%,-50%) scale(0.8)";
    menuTimeout = setTimeout(() => {
        menu.style.visibility = "hidden";
    },500)
}