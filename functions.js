function openCloseMenu() {
    var x = document.querySelector(".mobile-menu");
    var y = document.querySelector("body");
    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.overflow = "hidden"
    }
    else {
        x.style.display = "none";
        y.style.overflow = "scroll"
    }
}
