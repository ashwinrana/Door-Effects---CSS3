$(document).ready(function () {
    $("#axis").mouseenter(function () {
        $('header').fadeIn(1500);
        $('header').css({
            'font-family': 'sans-serif'
            , 'color': '#e74c3c'
            , 'font-size': '18px'
            , 'left': '40%'
            , 'top': '18%'
            , 'font-weight': '500'
            , 'position': 'fixed'
        });
    });
});

$(document).ready(function () {
    $("button").mouseleave(function () {
        $('header').fadeOut(300);
    });
});