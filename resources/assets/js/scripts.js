$(document).ready(function(){
  $('.selector-check').click(function(){
    $(this).find('input').trigger('click');
  });

  $('item_id_check').click(function(){
    $(this).trigger('click');
  });

  $('.drop-button').click(function(){
    $('.nav-items').toggleClass('show');
  });
});
