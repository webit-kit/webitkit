var email = document.getElementById("email");
var invalidem = document.getElementById("invalidem")
var emailicon = document.getElementById("emailcheck")
var password = document.getElementById("password")
var minchar = document.getElementById("minchar")
var maxchar = document.getElementById("maxchar")
var letchar = document.getElementById("letchar")
var numchar = document.getElementById("numchar")
var a = [0, true];
email.addEventListener("change", function(){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(email.value.match(mailformat))
    {
        if(a[0]==1)
        {
            invalidem.classList.toggle("d-none");
            emailicon.classList.toggle("text-danger")
            emailicon.classList.toggle("text-success")
        }
        else
        {
            emailicon.classList.toggle("text-success")
        }
        console.log("true")
    a[0]=0;
    a[1]=false;
    return true;
    }
    else
    {
        if(a[0]==0)
        {
            invalidem.classList.toggle("d-none");
            emailicon.classList.toggle("text-danger")
            a[0]=1;
        }
        if (a[1]==false)
        {
            emailicon.classList.toggle("text-success")
        }
        console.log("false")

    return false;
    }
})
password.addEventListener("change", function(){
    var n = this.value.length;
    m = this.value
    if (n > 30)
    {
        maxchar.classList.toggle("text-danger")
    }
    if (n < 8){
        minchar.classList.toggle("text-danger")
    }
    else {
        
    }
    if ((m.match(/[A-E]/gi))===null){
        letchar.classList.toggle("text-danger")
        console.log('asdasd')
    }
    if ((m.match(/[0-9]/g))===null){
        numchar.classList.toggle("text-danger")
    }
    else {
        console.log("true")
    }

})