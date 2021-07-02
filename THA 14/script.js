document.getElementById("1").addEventListener("click", display);

function display() {
  document.getElementById("a").innerHTML = "Oh! My eyes, My eyes >_<";
}
function form() {
    alert("Your movie is recorded successfully");
}
var x = 0;
function scrolling() {
  document.getElementById("2").innerHTML = x += 1;
}
function selecting(){
    alert('Something selected !')
}
function resizing() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("3").innerHTML = txt;
}