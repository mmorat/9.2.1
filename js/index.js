document.addEventListener("DOMContentLoaded", function(){
    var inputT = document.getElementById("inputText")
    var buttonT = document.getElementById("buttonText")
    buttonT.addEventListener("click", function(){
        inputTval = inputT.value
        if (inputT){
            localStorage.setItem("value" ,inputTval)
        }
    })
    
})