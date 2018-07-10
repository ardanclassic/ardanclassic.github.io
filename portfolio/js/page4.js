

content_1 = $('.timeline ul li:nth-child(1) .content');
content_2 = $('.timeline ul li:nth-child(2) .content');
content_3 = $('.timeline ul li:nth-child(3) .content');
content_4 = $('.timeline ul li:nth-child(4) .content');

shadow_1 = $('.timeline ul li:nth-child(1)::before');
shadow_2 = $('.timeline ul li:nth-child(2)::before');
shadow_3 = $('.timeline ul li:nth-child(3)::before');
shadow_4 = $('.timeline ul li:nth-child(4)::before');

// ------------------------------------------------------------------- //

    // $('.container').mousemove(function (e) {
    //     var moveX = 0;
    //     var moveY = (e.pageY * -1 / 5);
    //     $(this).css('background-position', moveX + 'px ' + moveY + 'px' )
    // })

// ------------------------------------------------------------------- //

$('.time').mouseover(function() {
    $('.one').mouseover(function() {
        $(this).append(
            '<style>.timeline ul li:nth-child(1)::before {box-shadow: 0 0 10px 10px lightblue}</style>',
            '<style>.timeline ul li:nth-child(1) h3 {box-shadow: 0 10px 10px -6px}</style>',
        );
    })
    $('.two').mouseover(function() {
        $(this).append(
            '<style>.timeline ul li:nth-child(2)::before {box-shadow: 0 0 10px 10px orange;}</style>',
            '<style>.timeline ul li:nth-child(2) h3 {box-shadow: 0 10px 10px -6px}</style>',
            
        );
    })
    $('.three').mouseover(function() {
        $(this).append(
            '<style>.timeline ul li:nth-child(3)::before {box-shadow: 0 0 10px 10px lightblue}</style>',
            '<style>.timeline ul li:nth-child(3) h3 {box-shadow: 0 10px 10px -6px}</style>',
        );
    })
    $('.four').mouseover(function() {
        $(this).append(
            '<style>.timeline ul li:nth-child(4)::before {box-shadow: 0 0 10px 10px orange;}</style>',
            '<style>.timeline ul li:nth-child(4) h3 {box-shadow: 0 10px 10px -6px}</style>',
        );
    })
})
$('.time').mouseout(function() {
    $('.one').mouseout(function() {
        $(this).append(
            '<style>.timeline ul li:nth-child(1)::before {box-shadow: none}</style>',
            '<style>.timeline ul li:nth-child(1) h3 {box-shadow: none}</style>',
        );
    })
    $('.two').mouseout(function() {
        $(this).append(
            '<style>.timeline ul li:nth-child(2)::before {box-shadow: none}</style>',
            '<style>.timeline ul li:nth-child(2) h3 {box-shadow: none}</style>',
        );
    })
    $('.three').mouseout(function() {
        $(this).append(
            '<style>.timeline ul li:nth-child(3)::before {box-shadow: none}</style>',
            '<style>.timeline ul li:nth-child(3) h3 {box-shadow: none}</style>',
        );
    })
    $('.four').mouseout(function() {
        $(this).append(
            '<style>.timeline ul li:nth-child(4)::before {box-shadow: none}</style>',
            '<style>.timeline ul li:nth-child(4) h3 {box-shadow: none}</style>',
        );
    })
})

$('.one').click(function() {
    $('body').fadeOut(2000, newpage);
    function newpage() {
        window.location.href = 'page2.html';
    }
})

$('.two').click(function() {
    $('body').fadeOut(2000, newpage);
    function newpage() {
        window.location.href = 'page3.html';
    }
})

$('.three').click(function() {
    $('body').fadeOut(2000, newpage);
    function newpage() {
        window.location.href = 'page5.html';
    }
})



// ------------------------------------------------------------------- //

$(document).ready(function() {
    $('.toggle').dblclick(function () {
        $('.toggle').toggleClass('active');
        $('ul').toggleClass('active')
    })
    $('.draggable').draggable()
})