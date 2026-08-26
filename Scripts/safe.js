document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
document.querySelectorAll("img").forEach((img) => {
    img.draggable = false;
})