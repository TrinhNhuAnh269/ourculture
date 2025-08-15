/*
  [JS Index]
*/


/*
  1. preloader
  2. timeout function
    2.1. show fadeIn element
    2.2. show elements, navigation, hero
	2.3. init
  3. section animation
  4. contact modal
  5. navigation
  6. borders
  7. swiper slider
  8. owl carousel
  9. magnificPopup
  10. contact form
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(1400);
        $("#preloader-status").delay(300).fadeOut("slow");
		
        // 2. timeout function
        // 2.1. show fadeIn element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(2000);
        }, 0);
        // 2.2. show elements, navigation, hero
        setTimeout(function() {
            $(".navigation-top").removeClass("top-position");
        }, 600);
		setTimeout(function() {
            $(".bottom-credits, .social-icons-wrapper-share, .navigation-bottom").removeClass("bottom-position");
        }, 600);
        setTimeout(function() {
            $(".navigation-left").removeClass("left-position");
        }, 600);
        setTimeout(function() {
            $(".navigation-right").removeClass("right-position");
        }, 600);
        $(".hero-bg").addClass("hero-bg-show");
        // 2.3. init
        $(initAnimation);
        $(initElements);
    });
	
    $(window).on("resize", function() {
        $(resizeBorders);
    });
	
    // 3. section animation
    $(".navigation .move a, .more-wraper-center-home a").on("click", function() {
        $(".bottom-credits").addClass("bottom-credits-home-call");
        $(".social-icons-wrapper-share").addClass("social-icons-wrapper-share-home-call");
        $(".section-closer").addClass("show");
        $(".navigation-top").addClass("navigation-top-position-primary");
		$(".navigation-bottom").addClass("navigation-bottom-position-primary");
        $(".navigation-left").addClass("navigation-left-position-primary");
        $(".navigation-right").addClass("navigation-right-position-primary");
        $(".introduction").removeClass("introduction-element-on").addClass("introduction-element-off");
        $(".borders-introduction").removeClass("borders-introduction-element-on").addClass("borders-introduction-element-off");
        $(".hero-bg").removeClass("hero-bg-show-primary, hero-bg-show").addClass("hero-bg-show-secondary, hero-bg-FIX");
    });
    $(".closer").on("click", function() {
        $(".bottom-credits").removeClass("bottom-credits-home-call");
        $(".social-icons-wrapper-share").removeClass("social-icons-wrapper-share-home-call");
        $(".section-closer").removeClass("show"); 
        $(".navigation-top").removeClass("navigation-top-position-primary");
		$(".navigation-bottom").removeClass("navigation-bottom-position-primary");
        $(".navigation-left").removeClass("navigation-left-position-primary");
        $(".navigation-right").removeClass("navigation-right-position-primary");
        $(".introduction").removeClass("introduction-element-off").addClass("introduction-element-on");
        $(".borders-introduction").removeClass("borders-introduction-element-off").addClass("borders-introduction-element-on");
        $(".hero-bg").removeClass("hero-bg-show-secondary, hero-bg-FIX").addClass("hero-bg-show-primary, hero-bg-show");
    });
    $(".contact-modal-closer").on("click", function() {
        $(".section-closer").addClass("show");
        $(".hero-bg").removeClass("hero-bg-show-primary, hero-bg-show").addClass("hero-bg-show-secondary, hero-bg-FIX");
    });
    $(".contact-modal-launcher").on("click", function() {
        $(".section-closer").removeClass("show");
        $(".hero-bg").removeClass("hero-bg-show-secondary, hero-bg-FIX").addClass("hero-bg-show-primary, hero-bg-show");
    });
	
    // 4. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function() {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open").addClass("close");
        } else {
            $(".contact-modal").removeClass("close").addClass("open");
        }
    });
	
    // 5. navigation
    setUpSections();
    $(".navigation .move a, .more-wraper-center-home a").on("click", function() {
        var target = $(this).attr("href");
        openContent(target, $(target).attr("data-direction"));
        return false;
    });
    $(".closer").on("click", function() {
        closeContent($("section.active").attr("data-direction"));
        return false;
    });
	
    // 6. borders
    function initAnimation() {
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "50%");
        $(".border-left, .border-right").css("height", "100%");
        var heightLaterals = $(".border-right").height();
        $(".border-left, .border-right").css("height", "0px");
        $(".border-left, .border-right").css("top", (heightLaterals / 2) + "px");
        var widthFramework = $(".border-top-1").width();
        var widthTop = $(".center-space-top span").width();
        var widthBottom = $(".center-space-bottom span").width();
        var calculateTop = widthFramework - (widthTop / 2) - 8;
        var calculateBottom = widthFramework - (widthBottom / 2) - 8;
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "0%");
        $(".border-left, .border-right").animate({
            height: heightLaterals + "px",
            top: "0px"
        }, 600, function() {
            $(".border-left, .border-right").css({
                height: "100%"
            });
            $(".border-top-1, .border-top-2").animate({
                width: (calculateTop - 25) + "px"
            }, 600);
            $(".border-bottom-1, .border-bottom-2").animate({
                width: (calculateBottom - 25) + "px"
            }, 600);
            $(".center-space-top, .center-space-bottom").stop(true, true).delay(600).animate({
                opacity: 1
            }, 2000);
        });
    }
    function initElements() {
        $(".center-space-top, .center-space-bottom").css("opacity", "0");
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "0%");
        $(".border-left, .border-right").css("height", "0px");
    }
    function resizeBorders() {
        $(".border-top-1, .border-top-2, .border-bottom-1, .border-bottom-2").css("width", "50%");
        var widthFramework = $(".border-top-1").width();
        var widthTop = $(".center-space-top span").width();
        var widthBottom = $(".center-space-bottom span").width();
        var calculateTop = widthFramework - (widthTop / 2) - 8;
        var calculateBottom = widthFramework - (widthBottom / 2) - 8;
        $(".border-top-1, .border-top-2").width(calculateTop);
        $(".border-bottom-1, .border-bottom-2").width(calculateBottom);
    }
	
	// 7. swiper slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: true,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        }
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.pause();
        });
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.play();
        });
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	
	// 8. owl carousel
    $("#works-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-works',
        items: 1,
        margin: 0
    });
	const $slides = $(".owl-carousel .owl-slide");
	$slides.css("height", $(window).height());
	$(window).resize(() => {
	    $slides.css("height", $(window).height());
	});
	
	// 9. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
	$(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
	// 10. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
	
});