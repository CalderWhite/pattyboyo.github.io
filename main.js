
$(document).ready(function() {
  
  window.setTimeout(function() {$('.pop:eq(0)').fadeIn('1000')},1000);
  window.setTimeout(function() {$('.pop:eq(1)').fadeIn('1000')},2000);
  window.setTimeout(function() {$('.pop:eq(2)').fadeIn('1000')},3000);
  window.setTimeout(function() {$('.pop:eq(3)').fadeIn('1000')},4000);
  window.setTimeout(function() { $('#title').fadeIn('1000')},5000);
  $('.pop:eq(0)').hover(function() {
      $('.pop:eq(0)').animate({height:300,width:200})
  });
  $('.pop:eq(1)').hover(function() {
      $('.pop:eq(1)').animate({height:300,width:200})
  });
  $('.pop:eq(2)').hover(function() {
      $('.pop:eq(2)').animate({height:300,width:200})
  });
  $('.pop:eq(3)').hover(function() {
      $('.pop:eq(3)').animate({height:300,width:200})
  });
    
} );
