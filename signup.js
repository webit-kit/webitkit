var email = document.getElementById("email");
var invalidem = document.getElementById("invalidem")
var emailicon = document.getElementById("emailcheck")
var password = document.getElementById("password")
var minchar = document.getElementById("minchar")
var maxchar = document.getElementById("maxchar")
var letchar = document.getElementById("letchar")
var numchar = document.getElementById("numchar")
var passwordeye = document.getElementById("passwordeye");
var passwordeyet = document.getElementById("passwordeyet");
var invalidep = document.getElementById("invalidep")
var confirmp = document.getElementById("confirmpassword")
var invalude
var a = [0, true];
var b = 0
var passvalue = ""
var check = [0, 0, 0, 0]
var passwordcontent;
email.addEventListener("change", function () {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value.match(mailformat)) {
        if (a[0] == 1) {
            invalidem.classList.toggle("d-none");
            emailicon.classList.toggle("text-danger")
            emailicon.classList.toggle("text-success")
        }
        else {
            emailicon.classList.toggle("text-success")
        }
        console.log("true")
        a[0] = 0;
        a[1] = false;
        return true;
    }
    else {
        if (a[0] == 0) {
            invalidem.classList.toggle("d-none");
            emailicon.classList.toggle("text-danger")
            a[0] = 1;
        }
        if (a[1] == false) {
            emailicon.classList.toggle("text-success")
        }
        console.log("false")

        return false;
    }
})
password.addEventListener("change", function () {
    var n = this.value.length;
    m = this.value
    passvalue = m
    if (n > 30) {
        if (check[0] === 0) { maxchar.classList.toggle("text-danger") }
        check[0] = 1
    }
    else {
        if (check[0] === 1) { maxchar.classList.toggle("text-danger") }
        check[0] = 0
    }
    if (n < 8) {
        if (check[1] === 0) { minchar.classList.toggle("text-danger") }
        console.log("nothere")
        check[1] = 1
    }
    else {
        if (check[1] === 1) {
            minchar.classList.toggle("text-danger")
            console.log("main")
        }
        console.log("here")
        check[1] = 0
    }
    if ((m.match(/[A-E]/gi)) === null) {
        if (check[2] === 0) { letchar.classList.toggle("text-danger") }
        check[2] = 1
    }
    else {
        if (check[2] === 1) {
            letchar.classList.toggle("text-danger")
        } check[2] = 0
    }
    if ((m.match(/[0-9]/g)) === null) {
        if (check[3] === 0) { numchar.classList.toggle("text-danger") }
        check[3] = 1
    }
    else {
        if (check[3] === 1) {
            numchar.classList.toggle("text-danger")
        }
        check[3] = 0
    }
    console.log(check)

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
confirmp.addEventListener("change", function () {
    if ( this.value != passvalue && b==0){
        invalidep.classList.toggle("d-none")
        b=1
    }
    if (this.value == passvalue && b==1)
    {
        invalidep.classList.toggle("d-none")
        b=0
    }
})
passwordeyet.addEventListener("click", function () {
    if (confirmp.type === "password") {
        confirmp.type = "text";
    } else {
        confirmp.type = "password";
    }
    passwordeyet.classList.toggle("fa-eye-slash")
    passwordeyet.classList.toggle("fa-eye")
})