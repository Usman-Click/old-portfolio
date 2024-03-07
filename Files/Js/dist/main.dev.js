"use strict";

$(document).ready(function () {
  var $btns = $('.project-sec .project-btn button');
  $btns.click(function (e) {
    $('.project-sec .project-btn button').removeClass('active');
    e.target.classList.add('active');
    var selector = $(e.target).attr('data-filter');
    $('.project-sec .grid').isotope({
      filter: selector
    });
    return false;
  });
  $('.project-sec .project-btn #btn1').trigger('click');
  $('.project-sec .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.client-sec .container .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      544: {
        items: 2
      }
    }
  }); // nabvar

  var nav_offset_top = $(".header-area").height() + 50;

  function navFixed() {
    if ($('.header-area').length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= nav_offset_top) {
          $('.header-area .main-menu').addClass('navbar-fixed');
        } else {
          $('.header-area .main-menu').removeClass('navbar-fixed');
        }
      });
    }
  }

  navFixed();
});