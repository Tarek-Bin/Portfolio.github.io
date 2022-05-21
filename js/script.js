$(function(){



 // Navbar on scrolling 
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });



// slick start
$('.slick').slick({
    dots: true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
});
// slick end

//    aos start
    AOS.init();
//    aos end

    
var mixer = mixitup('.mix_cont');


    

  }); 