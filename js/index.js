document.addEventListener("DOMContentLoaded", function() {
    var inputT = document.getElementById("inputText");
    var buttonT = document.getElementById("buttonText");
    var check = document.getElementById("recordar");

    buttonT.addEventListener("click", function() {
        inputTval = inputT.value;

        if (check.checked) {
            localStorage.setItem("value", inputTval);
        } else {
            sessionStorage.setItem("value", inputTval);
        }
    });
});
