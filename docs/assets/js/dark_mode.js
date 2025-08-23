
// const html = document.documentElement
var html = document.documentElement;

window.addEventListener("DOMContentLoaded", function() {
    var stored = localStorage.getItem("theme");
    if (stored === "dark-mode") {
        html.classList.add("dark-mode");
    }
});

function toggle_dark_mode() {
    html.classList.toggle("dark-mode");
    localStorage.setItem("theme", html.classList.contains("dark-mode") ? "dark-mode" : "light-mode");
}