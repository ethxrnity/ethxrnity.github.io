$(".click1").click(function() {
    $('html, body').animate({
        scrollTop: $("#bg-white").offset().top
    }, 1500);
    });


$(".click2").click(function() {
    $('html, body').animate({
        scrollTop: $("#bg-black").offset().top
    }, 2000);
    });
    
$(".click3").click(function() {
    $('html, body').animate({
        scrollTop: $("#bg-white2").offset().top
    }, 2000);
    });