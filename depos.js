var ale = document.getElementById("ale")
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    ale.classList.toggle("visible");
  }
function hide(){
  ale.classList.toggle("visible")
}