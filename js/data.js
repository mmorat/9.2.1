var parrafo = document.getElementById("data")

var dato = localStorage.getItem("value")

if (dato){
    parrafo.textContent = dato
}