$(document).ready(function () {
  
  $('#nav__burger').on('click', function() {
    $('#nav').toggleClass('nav_open');
  });

  $('.nav__list-item').on('click', function() {
    $('#nav').removeClass('nav_open');
  });

});