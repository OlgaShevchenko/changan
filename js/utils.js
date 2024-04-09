$(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
	$('.header__menu').slideToggle();	
	$('body').toggleClass('overflow');
  });
   $('.header__menu-item').click(function(){	
	$('.header__menu').slideUp();	
	$('body').removeClass('overflow');
	$('.hamburger').removeClass('is-active');
   });
  
});