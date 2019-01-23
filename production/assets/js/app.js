(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

require('./modules/menu.js');
require('./modules/form_validation.js');
require('./modules/slider.js');

},{"./modules/form_validation.js":2,"./modules/menu.js":3,"./modules/slider.js":4}],2:[function(require,module,exports){
'use strict';

$(document).ready(function () {

  $('#subscribe-btn').on('click', function (e) {
    var input = $('#user-email');
    var form = $('#subscribe-form');
    e.preventDefault();
    var isValid = (input.val().match(/.+?@.+/g) || []).length === 1;
    if (isValid) {
      input.css({ 'border': 'none' });
      form.submit();
    } else {
      input.css({ 'border': '1px solid red' });
      input.focus();
    }
  });
});

},{}],3:[function(require,module,exports){
'use strict';

$(document).ready(function () {

  $('#nav__burger').on('click', function () {
    $('#nav').toggleClass('nav_open');
  });

  $('.nav__list-item').on('click', function () {
    $('#nav').removeClass('nav_open');
  });
});

},{}],4:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  $(".slider").slick({
    arrows: true
  });
  $('.slick-prev').html('<i class="fas fa-angle-left"></i>');
  $('.slick-next').html('<i class="fas fa-angle-right"></i>');
});

},{}]},{},[1]);
