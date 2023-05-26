
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });


  // IMAGE CAROUSEL

  $(document).ready(function(){
    $('.slider').slick({
     dots: false,
     arrows: true,
     infinite: true,
     slidesToShow: 5,
     responsive: [
 {
   breakpoint: 1024,
   settings: {
     slidesToShow: 3,
     slidesToScroll: 3,
     infinite: true,
     dots: false
   }
 },
 {
   breakpoint: 768,
   settings: {
     slidesToShow: 2,
     slidesToScroll: 2
   }
 }
 ]
    });
  });

 $(document).ready(function(){
    $('.hero-slider').slick({
     dots: true,
     arrows: true
    });
 });





