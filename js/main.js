$(document).ready(function(){
    new WOW().init();

  //Main-nav
  //On scroll functionality
  $(window).scroll( () => {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('.header').addClass('navShadow') : $('.header').removeClass('navShadow');
    // windowTop > 100 ? $('.list-menu').css('top','100px') : $('.list-menu').css('top','160px');
  });
  
  //Toggle menu
  $('.menu-toggle').on('click', () => {
    $('.menu-toggle').toggleClass('closeMenu');
    $('.list-menu').toggleClass('showMenu');
    
    $('li').on('click', () => {
      $('.list-menu').removeClass('showMenu');
      $('.menu-toggle').removeClass('closeMenu');
    });
  });
});