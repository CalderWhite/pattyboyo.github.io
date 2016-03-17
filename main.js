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
     $('body').delay(8100).append("<img src='patrick.png'> <form>Secret Password: <br><input type='text' name='password' action='javascript:alert( 'success!' );'><input type='submit'></form>");
        })
   $('form').submit(function(event) {
      return false;
      if ($('input:first').val() === 'yourmotherwasamurloc') {
         return;
      } 
         event.preventDefault();
         alert('wrong, now get outta here!');
        
         
      
   }
      
      
      )
     })

