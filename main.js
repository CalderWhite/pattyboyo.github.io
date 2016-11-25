
$(document).ready(function() {
  
  window.setTimeout(function() {$('.pop:eq(0)').fadeIn('1000')},500);
  window.setTimeout(function() {$('.pop:eq(1)').fadeIn('1000')},1100);
  window.setTimeout(function() {$('.pop:eq(2)').fadeIn('1000')},1700);
  window.setTimeout(function() {$('.pop:eq(3)').fadeIn('1000')},2300);
  window.setTimeout(function() { $('#title').fadeIn('1000')},3000);
  $('.pop').hover(function(){
    $(this).filter(':not(:animated)').animate({height:250,width:250});
  }, function() {
    $(this).animate({height:200,width:200});
});
    
});
