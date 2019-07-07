$( function() {

    if ($('.trending-slider').length){    
      $('.trending-slider').slick({
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          infinite: true,
          arrows: false,
          speed: 2000,
          slidesToShow: 4,
          slidesToScroll: 2,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
            
          ]
        });
      };
  
      if ($('.release-tabs').length){
        $( '.release-tabs' ).tabs();
      };

      if ($('.products-tabs').length){
        $( '.products-tabs' ).tabs();
      };

      if ($('.details-tabs').length){
        $( '.details-tabs' ).tabs();
      };
  
      if ($(".js-range-slider").length) {
        $(".js-range-slider").ionRangeSlider({
          type: "double",
          min: 0,
          max: 600,
          prefix: "$"
        });		
      };
  
  });

  // Модальное окно

// открыть по кнопке
$('.button-log').click(function() { 
	
	$('.overlay').fadeIn();
	$('.overlay').addClass('disabled');
});

// закрыть на крестик
$('.js-close').click(function() { 
	$('.overlay').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
		
	}
});

$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 1000,
  from: 0,
  to: 600,
  grid: false,
  prefix: "$"
});



