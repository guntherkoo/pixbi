$.fn.attachDragger = function() {
    var a, b, c, d = !1;
    $($(this).selector).on("mousedown mouseup mousemove", function(e) {
        "mousedown" == e.type && (d = !0, a = [e.clientX, e.clientY]), "mouseup" == e.type && (d = !1), "mousemove" == e.type && 1 == d && (b = [e.clientX, e.clientY], c = [b[0] - a[0], b[1] - a[1]], $(this).scrollLeft($(this).scrollLeft() - c[0]), $(this).scrollTop($(this).scrollTop() - c[1]), a = [e.clientX, e.clientY])
    }), $(window).on("mouseup", function() {
        d = !1
    })
};
var $ = jQuery.noConflict();
$(document).ready(function() {
    $("#Menu").click(function() {
        $(this).toggleClass("active"), $(".menu-items").toggleClass("active")
    }), $(".Page-Content").click(function() {
        $("#Menu").removeClass("active"), $(".menu-items").removeClass("active")
    }), $('a[href^="#"]').bind("click.link", function(a) {
        a.preventDefault();
        var b = this.hash;
        $("html, body").stop().animate({
            scrollTop: $(b).offset().top - 0
        }, 2e3, "easeInOutExpo")
    }), $(window).scroll(function() {
        $("#Work")[0].getBoundingClientRect().top < 100 ? $("section.Wrap").addClass("Scrolled") : $("#Work")[0].getBoundingClientRect().top > 0 && $("section.Wrap").removeClass("Scrolled")
    }), 
    $(window).scroll(function() {
        $("#VideoControl")[0].getBoundingClientRect().top < 100 ? $("#video1").get(0).play() : $("#VideoControl")[0].getBoundingClientRect().top > 0 && $("#video1").get(0).pause()
    }), 
    $("span#appToggle").click(function() {
        $(this).addClass("active"), $(".inner-screen").addClass("active")
    }), $("span#closeToggle").click(function() {
        $("span#appToggle").removeClass("active"), $(".inner-screen").removeClass("active")
    }), $(".imac-screen-slider").flexslider({
        directionNav: !1,
        animation: "fade",
        slideshow: !1
    }), $(".website-screens-slider").flexslider({
        directionNav: !1,
        direction: "vertical",
        animation: "slide",
        slideshow: !1
    }), $(".ipad-screen").attachDragger(), $(".iphone-screen").attachDragger()
});