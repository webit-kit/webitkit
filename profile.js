var add = document.getElementById("add")
var closebtn = document.getElementById("closebtn")
var darken = document.getElementById("darken")
var popup= document.getElementById("popup")
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