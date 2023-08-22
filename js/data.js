var parrafo = document.getElementById("data");
var dato = localStorage.getItem("value");

document.addEventListener("DOMContentLoaded", function(){
    parrafo.textContent = dato
})