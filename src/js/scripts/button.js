$('.btn3').on('click', function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $(this).find('.text-more').hide();
        $(this).find('.text-less').show();
    } else {
        $(this).find('.text-more').show();
        $(this).find('.text-less').hide();
    }

    $(this).closest('.events-item__buttons')
        .siblings('.events-item__text')
        .find('.events-item__text-full')
        .slideToggle();
});
