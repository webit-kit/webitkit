var add = document.getElementById("add")
var addcarry = document.getElementById("addcarry")

var closebtn = document.getElementById("closebtn")
var closebtncarry = document.getElementById("closebtncarry")

var darken = document.getElementById("darken")
var popup= document.getElementById("popup")
var popupcarry= document.getElementById("popupcarry")

var singout = document.getElementById("signout")
add.addEventListener("click", function(){
    darken.classList.toggle("d-none")
    popup.classList.toggle("d-none")
})
closebtn.addEventListener("click", function (){
    popup.classList.toggle("d-none")
    darken.classList.toggle("d-none")
})
function signout(){
    darken.classList.toggle("d-none")
    singout.classList.toggle("d-none")
}
addcarry.addEventListener("click", function(){
    darken.classList.toggle("d-none")
    popupcarry.classList.toggle("d-none")
})
closebtncarry.addEventListener("click", function (){
    popupcarry.classList.toggle("d-none")
    darken.classList.toggle("d-none")
})