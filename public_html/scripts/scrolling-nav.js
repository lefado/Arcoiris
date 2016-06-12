//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    
    $(document).on("click", ".page-scroll", function() { //DFL
//    $('.page-scroll').bind('click', function() {
        var $anchor = $(this);
        
        var $ref= $(this).attr('href'); //DFL
//        $ref = $ref.replace("#/","");

        $('html, body').stop().animate({                            
            scrollTop: $($ref).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
