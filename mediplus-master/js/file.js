// Header Height
$(".header1").height($(window).height())

// fixed navbar
$(window).scroll(function () {

    if ($(this).scrollTop() > $('nav').height()) {

        $("nav").addClass("nav-scroll") 

    } else {
        
        $("nav").removeClass("nav-scroll") 

    }

})

// Smothly Scroll Element
$("nav li a").click(function (e) {

    e.preventDefult

    $("html, body").animate({

        scrollTop: $("#" + $(this).data('scroll')).offset().top + 1

    }, 1000)

})

// Owl Caruosel
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:80,
    nav:true,
    responsive:{
        400:{
            items:1
        },
        900:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// Onload  Section
// $(".onload").height($("body").height())

// function animate() {
//     $(".onload").hide(500)
// }

// window.onLoad =  animate()