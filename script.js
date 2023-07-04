let passwordField = document.getElementById("password")
let confirmedPasswordField = document.getElementById("confirm-password")
let errorMessage = document.getElementById("error-message")



confirmedPasswordField.onkeyup  = function(){
    if(passwordField.value != confirmedPasswordField.value){
        errorMessage.style.display ="block"
        passwordField.style.border = "2px solid red"
        confirmedPasswordField.style.border = "2px solid red"
    }

    if(passwordField.value === confirmedPasswordField.value){
        errorMessage.style.display = "none"
        passwordField.style.border = "2px solid green"
        confirmedPasswordField.style.border = "2px solid green"

    }
}
