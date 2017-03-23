var i = 0;

$(document).ready(function(){

	$('.right-arrow').on('click', function(){
		if (i <= 2) {
			i ++;
			console.log(i); 
			var margin = i * -100;
			$('.carousel-container').css('margin-left', margin + '%')
		}
	});

	$('.left-arrow').on('click', function(){
		if (i > 0) {
			i --;
			console.log(i); 
			var margin = i * -100;
			$('.carousel-container').css('margin-left', margin + '%')
		}		
	});

	$('.button').on('click', function(){
		i = $(this).index();
		var margin = i * -100;
		$('.carousel-container').css('margin-left', margin + '%');
	});


});