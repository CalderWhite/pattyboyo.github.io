
$(document).ready(function() {
  
  window.setTimeout(function() {$('.pop:eq(0)').fadeIn('1000')},1000);
  window.setTimeout(function() {$('.pop:eq(1)').fadeIn('1000')},2000);
  window.setTimeout(function() {$('.pop:eq(2)').fadeIn('1000')},3000);
  window.setTimeout(function() {$('.pop:eq(3)').fadeIn('1000')},4000);
  window.setTimeout(function() { $('#title').fadeIn('1000')},5000);
  $('.pop').hover(function(){
    $(this).animate({height:250,width:250});
  }, function() {
    $(this).animate({height:200,width:200});
};
                 
                 
   );
    
});
