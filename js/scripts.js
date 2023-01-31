(function ($) {
    //Header Functions
    stickyHeader();
    $(window).scroll(function () {
        stickyHeader();
    });
    $(window).resize(function () {
        stickyHeader();
    });

    function stickyHeader() {
        if ($(window).scrollTop() > 60 || $(window).width() < 1199) {
            $(".sticky_header_wrapper").addClass("active");
            $(".normal_header").removeClass("active");
        } else {
            $(".sticky_header_wrapper").removeClass("active");
            $(".normal_header").addClass("active");
        }
    }

    //toggle two class for mega menu
    $("#menu_label").on("click", function () {
        if (!$(".mega_menu_container").hasClass("active")) {
            $(".mega_menu_container").addClass("active");
            console.log("I am Here");
        } else {
            $(".mega_menu_container").removeClass("active");
        }
    });

    //Banner Tab section
    $(".tab-link").click(function () {
        var tabID = $(this).attr("data-tab");

        $(this).addClass("active").siblings().removeClass("active");

        $("#tab-" + tabID)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });

    $(".next").click(function () {
        $(".tabs .active").next().click();
        chekingTabIndex();
    });
    $(".prev").click(function () {
        $(".tabs .active").prev().click();
        chekingTabIndex();
    });

    //cheking tab index for enable and disable next and prev button
    function chekingTabIndex() {
        const current = $(".tabs .active");
        if (current.is(":first-child")) $(".prev").addClass("inactive");
        else $(".prev").removeClass("inactive");
        if (current.is(":last-child")) $(".next").addClass("inactive");
        else $(".next").removeClass("inactive");
    }

    // Call Sly on frame
    $(window).on("load", function () {
        var $frame = $(".transection_slider_wrapper");
        var $wrap = $frame.parent();

        $frame.sly({
            smart: 1,
            speed: 300,
            horizontal: 1,
            mouseDragging: 1,
            releaseSwing: 1,
            touchDragging: 1,
            itemNav: "forceCentered",
            scrollBy: 1,
            clickBar: 1,
            elasticBounds: 1,
            dragHandle: 1,
            dynamicHandle: 1,
            sbSize: 80,
            activateMiddle: true,
            easing: "easeOutExpo",
            prev: $wrap.find(".prev_slide"),
            next: $wrap.find(".next_slide"),
            scrollBar: $wrap.find(".customScrollbar"),
        });
    });

    //subscribe modal
    $(".close-modal").on("click", function (e) {
        $(".modal").toggleClass("is-visible");
    });

    //Get the Year for the copyRight
    $(".current_date").text(new Date().getFullYear());
})(jQuery);
