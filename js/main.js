//jquery stuff here



$(document).ready(function() {
    $('.bgaudio').hide();
    $('.songClick').on('click', function() {
        $('.bgaudio').show('slow');
    })
});

