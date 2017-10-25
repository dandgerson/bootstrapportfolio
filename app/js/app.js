$(document).ready(function(){

  var owlHeader = $('#headerCarousel');

  owlHeader.owlCarousel({
    loop:true,
    nav:false,
    dot:true,
    items:1,
    smartSpeed: 950,

  });
  // owlHeader.on('mousewheel', '.owl-stage', function (e) {
  //  if (e.deltaY > 0) {
  //    owlHeader.trigger('next.owl');
  //  } else {
  //    owlHeader.trigger('prev.owl');
  //  }
  //  e.preventDefault();
  // });



  owlHeader.on('changed.owl.carousel', function (themeName) {

    //var itemId = $('.owl-item.active').children().attr('id');
    var itemId = themeName.item.index;

    switch(itemId) {
      case 1:
      themeName = '-blue';

      break;
      case 2:
      
      themeName = '';

      break;
      case 3:
      themeName = '-yellow';

      break;
      case 4:
      themeName = '-blue';

      break;
      default:
      themeName = '';

    }
    
    document.getElementById("theme").href="css/theme" + themeName + ".css";
  });
  

  // $(".owl-carousel").owlCarousel();
  var owlPortfolio = $('#portfolioCarousel');
  owlPortfolio.owlCarousel({
    loop:true,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      960:{
        items:5
      },
      1200:{
        items:5
      }
    }
  });
  owlPortfolio.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      owlPortfolio.trigger('next.owl');
    } else {
      owlPortfolio.trigger('prev.owl');
    }
    e.preventDefault();
  });

});