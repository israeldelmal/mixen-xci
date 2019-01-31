// Formulario
$('body > nav > span > a:first-of-type').on('click', function(event) {
	event.preventDefault();
	$('#formulario').fadeIn(300);
	$('body').css('overflow', 'hidden');
});

$('body > nav > span > a:last-of-type').on('click', function(event) {
	event.preventDefault();
	$('body > nav > span').fadeOut('fast');
});

$('#formulario > a').on('click', function(event) {
	event.preventDefault();
	$('#formulario').fadeOut(300);
	$('body').css('overflow', 'visible');
});

$('responsive-nav > button').on('click', function(event) {
	event.preventDefault();
	$('#formulario').fadeOut(300);
});

$(function() {
	$(window).scroll(function(){
		var windowHeight = $(window).scrollTop();
		var altura       = $('.altura').offset();
		altura           = altura.top;

	    if (windowHeight >= altura) {
			$('body > nav > span').addClass('span-active');
	    } else {
			$('body > nav > span').removeClass('span-active');
		}
	});
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

// Desarrollos
$('#desarrollos > ul > li > a').on('click', function(event) {
	event.preventDefault();

	let ID = $(this).attr('data-property');

	$('#desarrollos > div').fadeOut(300);
	$('#desarrollos > ul > li > a').removeClass('active');

	$(this).addClass('active');
	$(ID).fadeIn(600);
});

// Resultado
$('#resultado > section > div > photos > ul > li > img').on('click', function(event) {
	event.preventDefault();

	let IMG = $(this).attr('src');

	$('#resultado > section > div > photos > div > img').attr('src', IMG);
});