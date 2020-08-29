$(function() {

    'use strict';

    // loader
    $("#loader-wrapper").fadeOut();

    // smooth scroll
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({

                scrollTop: $(hash).offset().top

            }, 850, function() {

                window.location.hash = hash;

            });

        }

    });

    // hide navbar on mobile after click
    $('.nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // navbar on scroll
    $(window).on('scroll', function() {

        if ($(document).scrollTop() > 50) {

            $(".navbar-fixed-top").css({
                "background-color": "transparent"
            });

            $(".navbar-brand").css({
                "color": "#fff"
            });

              $(".navbar .menus").css({
                "color": "#222"
            });

            $(".navbar-nav li a").css({
                "color": "#555"
            });

            $(".navbar-default .navbar-toggle i").css({
                "color": "#222"
            });

        } else {

            $(".navbar-fixed-top").css({
                "background-color": "transparent",
                "transition": ".5s ease-out",
                "box-shadow": "none"
            });

            $("a.navbar-brand").css({
                "color": "#fff"
            });

             $(".navbar .menus").css({
                "color": "#222"
            });

            $(".navbar-nav li a").css({
                "color": "#fff"
            });

            $(".navbar-default .navbar-toggle i").css({
                "color": "#222"
            });

            $(".navbar-default .navbar-collapse .navbar-nav li a").css({
                "color": "#fff"
            });
        }

    });

    // filterizr
    $('.filtr-container').filterizr();

    // work filter
    $('.work-menu li').on('click', function() {
        $('.work-menu li').removeClass('active');
        $(this).addClass('active');
    });

   

    // type
    var typed2 = new Typed('#typed2', {
        strings: [' I could either watch it happen, or I could become a part of it.'],
        typeSpeed: 60,
        backSpeed: 90,
        fadeOut: true,
        loop: true
      });


});