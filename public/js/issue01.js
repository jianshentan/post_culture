$(document).ready(function() {

    // sticky nav
    var nav = $(".issue_nav");
    var navYLoc = nav.position().top;
    var navHeight = nav.height();
    window.onscroll = function() {
        if ($(window).scrollTop() > navYLoc) {
            nav.css("position", "fixed");
            nav.css("top", "0");
        } else 
            nav.css("position", "relative");
        /*
        if ($(window).scrollTop() > navYLoc)
            nav.css("background-color", "rgba(255,255,255,0.7)");
        else
            nav.css("background-color", "rgba(255,255,255,0)");
        */
    };
    
    // nav hover functionality
    $(".issue_nav_element").each(function() {
        $(this).hover(function() {
            $(this).find(".element_name").css("opacity", "1.0");
        }, function() {
            $(this).find(".element_name").css("opacity", "0");
        });
    });

    //nav scroll-to-content functionality
    $(".issue_nav_element").each(function() {
        $(this).click(function() {
            var num = $(this).attr("number");
            $(".object").each(function() {
                if ($(this).attr("tag") === num)
                    scrollToElement($(this));
            });
        });
    });
});

// set nav to active on scroll
$(document).scroll(function(){ 
    var navHeight = $(".issue_nav").height();
    var yLoc = $(window).scrollTop() + navHeight + 1;
    
    var num;
    $(".object").each(function() {
        if ($(this).position().top < yLoc && 
            $(this).position().top + $(this).height() > yLoc) {
            num = $(this).attr("tag");     
        } 
    });

    $(".issue_nav_element").each(function() {
        if ($(this).attr("number") == num)
            $(this).addClass("active");
        else
            $(this).removeClass("active");
    });
});

function scrollToElement(e) {
    var navHeight = $(".issue_nav").height();
    $('html, body').animate({'scrollTop': e.offset().top - navHeight}, 'slow', 'swing');
};
