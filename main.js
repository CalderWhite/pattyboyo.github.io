var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "About Me!";
letterColors = [red, orange, green, blue, purple]

bubbleShape = "circle";

drawName(myName, letterColors);
bounceBubbles();

$(document).ready(function() {
   
 
  $("button").click(function() {
     $(".main, .topbar, button").toggle("explode");
     $('body').delay(8100).append("<img src='patrick.png'> <form>Secret Password: <br><input type='text' name='password' id='password'> <input type='button' id='booya'></form>");
        })
         $('#booya').click(function() {
        if (document.getElementById('password').value == 'your mother was a murloc') {
           window.location.replace('secret.html');
         } else {
            alert('Wrong, now get outta here!');
            window.history.back();
         }})
     })

