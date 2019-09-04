

$(document).ready(function () {
  $('.js-banner .close').on('click', function (e) {
    $('.banner').hide();
  });

  $('.section-aside .js-link').on('click', function (e) {
    window.open('https://github.com/kiss/web-accessibility-workshop');
  });

  function handleKeyDown(event) {
    if (event.keyCode == 13) {
      $(event.target).prop('checked') ?
      $(event.target).prop('checked', false) :
      $(event.target).prop('checked', true);
    }
  }

  const inputCheckbox = document.querySelectorAll('input[type=checkbox]');

  if (inputCheckbox.length) {
    for (let i = 0; i < inputCheckbox.length; i++) {
      inputCheckbox[i].addEventListener('keydown', handleKeyDown);
    }
  }

  $('.form-subscribe .button').on('click', function (e) {
    const $inputs = $('.form-subscribe input');
    let valid = true;

    for (let i = 0; i < $inputs.length; i++) {
      console.log($inputs[i].classList)
      if (!$inputs[i].validity.valid) {
        valid = false;
        $inputs[i].classList = ('error');
      } else {
        $inputs[i].classList = ('');
      }
    }

    if (!valid) {
      $('.form-subscribe .error').show();
    } else {
      $('.form-subscribe input').val('');
      $('.form-subscribe input[type=checkbox]').prop('checked',false);

      $('.form-subscribe .error').hide();
      $('.form-subscribe .success').show();
    }
  });
});