var passwordeye = document.getElementById("passwordeye");
var password = document.getElementById("password")
var email = document.getElementById("email");
var emailicon = document.getElementById("emailcheck")
var a = [0, true];

email.addEventListener("change", function () {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value.match(mailformat)) {
        if (a[0] == 1) {
            emailicon.classList.toggle("text-danger")
            emailicon.classList.toggle("text-success")
        }
        else {
            emailicon.classList.toggle("text-success")
        }
        a[0] = 0;
        a[1] = false;
        return true;
    }
    else {
        if (a[0] == 0) {
            emailicon.classList.toggle("text-danger")
            a[0] = 1;
        }
        if (a[1] == false) {
            emailicon.classList.toggle("text-success")
        }

        return false;
    }
})
passwordeye.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
    passwordeye.classList.toggle("fa-eye-slash")
    passwordeye.classList.toggle("fa-eye")
})