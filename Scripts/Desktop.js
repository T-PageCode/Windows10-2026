const start = document.getElementById("start");
const startMenu = document.getElementById("start-menu");
let startTimeout = null;
start.addEventListener("click", () => {
    if (startMenu.style.opacity === "0" || startMenu.style.transform === "translate(-50%,-50%) scale(0.8)") {
        clearTimeout(startTimeout);
        startMenu.style.opacity = "1";
        startMenu.style.transform = "translate(-50%,-50%) scale(1)";
        startMenu.style.visibility = "visible";
    }
    else {
        clearTimeout(startTimeout);
        startMenu.style.opacity = "0";
        startMenu.style.transform = "translate(-50%,-50%) scale(0.8)";
        startTimeout = setTimeout(() => {
            startMenu.style.visibility = "hidden";
        },500)
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