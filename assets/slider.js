$(document).ready(function() {
	$('.flex-next').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
	$('.flex-prev').html('<i class="fa fa-chevron-left" aria-hidden="true"></i>')
  });
  $('.slide-image').each(function() {
	var bg = $(this).data('bg');
	var pos = $(this).data('flex-start');
	$(this).css({
	  "background-image" : "url("+bg+")",
	  "transform-origin": pos,
	})
  });
  $('.flex-slider').flexslider({
	slideshow: true,
	slideshowSpeed: 5000,
	animationSpeed: 1000,
	controlNav: false,
	// autoplay
	pauseOnAction: true,
	after: function(slider) {
	  if (!slider.playing) {
		slider.play();
	  }
	}
	//autoplay
  });
  