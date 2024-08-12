$(function(){
    $('#open-btn').on('click', function(){
        $('#popup-box').addClass('show')
    });
});
$(function(){
    $('#popup-btn').on('click', function(){
        $('#popup-box').removeClass('show')
    });
});