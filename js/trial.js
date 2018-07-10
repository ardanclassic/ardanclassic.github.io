// $(document).ready(function(){
// })

$(Window).scroll(function(){

    var scr = $(this).scrollTop();
    var elm = $('.item2').offset().top;
    var tot = scr - elm;
    // console.log("Scr = "+scr+" Elm = "+elm+" Nilai = "+tot);

    if (scr > elm){
        $(this).scrollTop(function(){
            $('.item1').css('opacity', 1 - tot / 80);
            $('.item2').css('opacity', 1 - tot / 150);
            $('.item3').css('opacity', 1 - tot / 80);
            $('.item4').css('opacity', 1 - tot / 150);
            $('.item5').css('opacity', 1 - tot / 80);
            $('#matox').css('opacity', 1 - tot / 150);
        })
    }

    // ------------------------- section 2 ------------------------------ //

    if (scr > 256)
    {
        var scr2 = (scr / 271) - 1.25;
        var elm2 = $('.part1').offset().top / 900;
        var tot2 = elm2 - scr2;
        // console.log("Scr2 = "+scr2+" Elm2 = "+elm2+" Nilai2= "+tot2);
    
        if (scr2 > 0){
            $(this).scrollTop(function(){
                $('.part1').css('opacity', 0 + scr2);
                $('.part2').css('opacity', 0 + scr2);
                $('.part3').css({
                    'opacity' : 0 + scr2,
                    'left' : 15 - (scr2*2) + 'cm',
                });
            })
        } 
        if (scr2 > 1.6) {
            $(this).scrollTop(function(){
                $('.part1').css('opacity', 1 + (tot2 + 0.6));
                $('.part2').css('opacity', 1 + (tot2 + 0.6));
                $('.part3').css({
                    'opacity' : 0,
                    'left' : 16 + 'cm',
                });
            })
        }
    }

    // // ------------------------- section 3 ------------------------------ //

    scr3 = $(document).scrollTop();
    console.log(scr3);
    if (scr3 > 1000){
        $(this).scrollTop(function(){
            $('.part4').css({
                'opacity' : 1,
                'top' : 30 + 'vh',
                'transition' : 2 + 's',
            });
            $('.text-1').css({
                'opacity' : 1,
                'top' : 7 + 'em',
                'transition' : 3 + 's',
            });
        })
    } if (scr < 950) {
        $(this).scrollTop(function(){
            $('.part4').css({
                'opacity' : 0,
                'top' : 65 + 'vh',
            });
            $('.text-1').css({
                'opacity' : 0,
                'top' : 10 + 'em',
                'transition' : 2 + 's',
            });
        })
    }


});