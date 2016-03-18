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

  $("#a").click(function() {
     $(".main, .topbar, button").toggle("explode");
     $('body').delay(8100).append("<img src='patrick.png'> <form >  <input type='text'></form><button id='submit'>submit</button>");
        })
   $("body").on('click','#submit',function() {
        if ($('input:first').val() === 'yourmotherwasamurloc') {
          alert('Correct, you may proceed.');
          window.location.replace('secret.html');
        } else {
          alert('Wrong! Now get outta here!')
          window.history.back()
        }
        
      });
 
     } )
