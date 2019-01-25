// Formulario
$('body > nav > span > a:last-of-type').on('click', function(event) {
	event.preventDefault();
	$('body > nav > span').fadeOut('fast');
});

// Clases en navegación
$(window).scroll(function() {
	if ($(window).width() > 1370) {
		if ($(this).scrollTop() > 0) {
			$('nav').addClass('nav-white');
		} else {
			$('nav').removeClass('nav-white');
		}
	}

	if ($('body > nav > span').is(':visible')) {
		$('body > nav > span').fadeOut('fast');
	}
});

// Navegación
$('.item-menu').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');
	if ($(window).width() > 1370) {
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top - 80
		}, 1000);
	} else if ($(window).width() < 1370) {
		$('body > nav').removeClass('active-nav');
		$('body > button').removeClass('active-btn');
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top
		}, 1000);
	}
});

// Botón de navegación
$('body > button').on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('active-btn');
	$('body > nav').toggleClass('active-nav');
});

// FAQ
$('#faq > div > ul > li > a').on('click', function(event) {
	event.preventDefault();
	let UL = $(this).siblings('div');
	let ID = $(this);

	$('#faq > div > ul > li > a').removeClass('active');
	$('#faq > div > ul > li > div').slideUp(300);
	$('#faq > div > ul > li > a > i').removeClass('i-rotate');

	if ($(UL).is(':visible')) {
		$(UL).slideUp(300);
		$(ID).find('i').removeClass('i-rotate');
		$(ID).removeClass('active');
	} else {
		$(UL).slideDown(300);		
		$(ID).find('i').addClass('i-rotate');
		$(ID).addClass('active');
	}
});