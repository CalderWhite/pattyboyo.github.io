
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
