$(document).ready(function(){

  $('#slide').click(function(){
    $('#jquery').slideToggle(2000);
  });
  $('#fadee').click(function(){
    $('#jquery').fadeToggle(2000);
  });
  $('#jquery').click(function(){
    $('div, ul li:nth-child(2)').fadeTo('slow', 0.5);
  });
});
