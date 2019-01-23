$(document).ready(function (){

$('#subscribe-btn').on('click', function (e) {
  let input = $('#user-email');
  let form = $('#subscribe-form');
  e.preventDefault();
  let isValid = (input.val().match(/.+?@.+/g) || []).length === 1;
  if (isValid) {
    input.css({'border': 'none'});
    form.submit();
  } else {
    input.css({'border': '1px solid red'});
    input.focus();
  }
});
});