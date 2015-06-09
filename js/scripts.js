$(document).ready(function() {
    var text_max = 140;
    $('#char-left').text(text_max + ' characters remaining');

    $('#tweet-box').keyup(function() {
        var text_length = $('#tweet-box').val().length;
        var text_remaining = text_max - text_length;
      if (text_remaining < 45) {
        $('#char-left').addClass('text-danger');
      } else if (text_remaining < 95) {
        $('#char-left').removeClass('text-danger').addClass('text-warning');
      }
        $('#char-left').text(text_remaining + ' characters remaining');
    });

    $("#add-tweet").click(function() {
      $('#char-left').removeClass();
      $('#char-left').text(text_max + ' characters remaining');
    });
});
