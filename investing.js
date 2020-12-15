var textdate = document.getElementById("datatext")
var checkinput = document.getElementById("inputGroupSelect01")
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+15);
textdate.innerHTML=date;
function datechange(value) {
        if (value == "15 days"){
            textdate.innerText=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+15);;
        }
        else if (value == "3 months"){
            date = (today.getFullYear()+1)+'-'+(today.getMonth()-8)+'-'+(today.getDate());
            textdate.innerText=date;
        }
        else if (value == "6 months"){
            date = (today.getFullYear()+1)+'-'+(today.getMonth()-5)+'-'+(today.getDate());
            textdate.innerText=date

            }
        else {
            date = (today.getFullYear()+1)+'-'+(today.getMonth()+1)+'-'+(today.getDate());
            textdate.innerText=date
        }
   }
