$(document).ready(function() {

    $('#submit').click(function() {
        var $input = $('input[name="fName"]').val();
        $('ul').append('<li>' + $input + '<button class="remove"></button></li>');
        $('input[name="fName"]').val('');
    });

    $(document).on('click', 'li', function() {
        $(this).remove();
    });

    $('#clear').click(function() {
        $('ul').empty();
    });

});
