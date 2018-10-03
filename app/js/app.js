$(document).ready(function() {

  $('#headerCarousel').owlCarousel({
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



  $('#headerCarousel').on('changed.owl.carousel', function(themeName) {

    const itemId = themeName.item.index;

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
    
    document.getElementById("theme").href = "css/theme" + themeName + ".css";
  });
  

  $('#portfolioCarousel').owlCarousel({
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

  const portfolioCarousel = $('#portfolioCarousel');
  portfolioCarousel.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      portfolioCarousel.trigger('next.owl');
    } else {
      portfolioCarousel.trigger('prev.owl');
    }
    e.preventDefault();
  });
});