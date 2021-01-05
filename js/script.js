$(document).ready(function () {
    $('.nav__burger').click(function (event) {
        $('.nav__burger, .nav_body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});