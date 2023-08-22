document.addEventListener("DOMContentLoaded", function () {
    var inputText = document.getElementById("inputText");
    var buttonText = document.getElementById("buttonText");
    buttonText.addEventListener("click", function(){
        if(inputText.value){
            localStorage.setItem("value", valor)

        }

    })
