//.fn es un prototipo de jquery que se usa para armar un plugin 

(function($) { 
	$.fn.carousel = function(listaUrls) {
		var self = this; //agregamos la variable sel para poder usarla en el forEach
		self.addClass('carousel'); //aca podriamos usar this
		self.html(`
			<div class="slides-container">
				<ul></ul>
			</div>
			<div class="arrows-container">
				<div class="arrow left-arrow"> < </div>
				<div class="arrow right-arrow"> > </div>
			</div>
			<div class="buttons-container">
				<div class="buttons">	
				</div>
			</div>
		`);

		// hago un forEach porque se necesitan tantos li como urls(fotos) hayan
		listaUrls.forEach(function(url) {
			var slideHtml = '<li><img clas="pic-carousel" src="' + url + '" /></li>';
			self.find('ul').append(slideHtml);
			self.find('.buttons').append('<div class="button"></div>');
		});

		var i = 0;

		// se usa .find para que solo tome los elementos o clases dentro del plugin (self) 
		self.find('.right-arrow').on('click', function(){
			if (i <= 2) {
				i ++;
				console.log(i); 
				var margin = i * -100;
				self.find('.slides-container').css('margin-left', margin + '%')
			}
		});

		self.find('.left-arrow').on('click', function(){
			if (i > 0) {
				i --;
				console.log(i); 
				var margin = i * -100;
				self.find('.slides-container').css('margin-left', margin + '%')
			}		
		});

		self.find('.button').on('click', function(){
			i = $(this).index();
			var margin = i * -100;
			self.find('.slides-container').css('margin-left', margin + '%');
		});


	};

} (jQuery));