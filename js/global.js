$(document).ready(function () {

  // fixed menu
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass('fixed');
    } else {
      $(".header").removeClass('fixed');
    }
  });

  // popup article
  $('.article__setting__btn').click(function () {
    $('.popup').addClass('show-popup');
  });
  $('.popup__item--cancel').click(function () {
    $('.popup').removeClass('show-popup');
  });

  // popup setting acc 
  // $('.acc__setting__btn').click(function () {
  //   $('.popup').addClass('show-popup');
  // });

  // slider story
  $('.slickCenter').slick({
    // centerMode: true,
    slidesToShow: 7,
    infinite: false

  });


  // menu tab
  $('ul.tab li').click(function () {
    var tab_id = $(this).attr('data-tab');

    // $('ul.tab li').removeClass('current');
    $(this).parents('.tab').find('.current').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  });

  // popup change avatar  
  $('.edit__img__btn').click(function () {
    $('.popup').addClass('show-popup');
    return false;
  });
});