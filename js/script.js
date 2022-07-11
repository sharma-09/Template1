function playloader() {
    setTimeout(loader, 10000);
}

function loader() {
    document.querySelector(".footer").style.display = "none";
    document.querySelector(".footer").style.display = "block";
}