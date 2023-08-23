
var parrafo = document.getElementById("data")

let dato = localStorage.getItem("value")
if (!dato){
    dato = sessionStorage.getItem("value")
}

if (dato){
    parrafo.innerHTML += dato
} else {
    alert ("no hay ningun dato ")
}
