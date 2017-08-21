function applyMailTo()
{
	$('a[href*=mailto]').on('click', function(e)
	{
		var lstrEmail = $(this).attr('href').replace('mailto:', '');

		lstrEmail = lstrEmail.split('').reverse().join('')

		$(this).attr('href', 'mailto:' + lstrEmail);
	});
}

$(document).on('click', '.navBarCollapse', function(e) {
	console.log("fucker clicked");
	$('#togglemenu').collapse('hide');
	// if( $(e.target).is('label') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	//
	// }
});


function small_port() {
	$('.change-row').addClass("row");
	$('.super-change1').addClass("col-12");
	$('.super-change2').addClass('col-12');
	$('.sub-change1').addClass('col-5');
	$('.sub-change2').addClass('col-7');
	$('.projects-change').addClass('col-12');
	$('.projects-change').removeClass('col-6');
	//skills - hide big
	$('.mixer-bg').addClass('hidden-sm-down');
	//skills - show small
	$('.mixer-sm').removeClass('hidden-md-up');
}

function not_small_port() {
	$('.change-row').removeClass("row");
	$('.super-change1').removeClass("col-12");
	$('.super-change2').removeClass('col-12');
	$('.sub-change1').removeClass('col-5');
	$('.sub-change2').removeClass('col-7');
	$('.projects-chage').removeClass('col-12');
	$('.projects-change').addClass('col-6');
	//skills - show big
	$('.mixer-bg').removeClass('hidden-sm-down');
	//skills - hide small
	$('.mixer-sm').addClass('hidden-md-up');
}

function small_land() {
	$('.change-col').addClass("col-6");
	$('.super-change1').addClass("col-5");
	$('.super-change2').addClass('col-7');
	$('.sub-change1').addClass('col-12');
	$('.sub-change2').addClass('col-12');
	$('hr.hidden-md-up').addClass('hidden-xs-up');
	$('.projects-change').addClass('col-6');
	$('.projects-change').removeClass('col-12');
	//skills - show big
	$('.mixer-bg').removeClass('hidden-sm-down');
	// $('.mixer-bg').addClass('offset-xs-2');
	//skills - hide small
	$('.mixer-sm').addClass('hidden-sm-down');
}

function not_small_land() {
	$('.change-col').removeClass('col-6');
	$('.super-change1').removeClass("col-5");
	$('.super-change2').removeClass('col-7');
	$('.sub-change1').removeClass('col-12');
	$('.sub-change2').removeClass('col-12');
	$('hr.hidden-md-up').removeClass('hidden-xs-up');
	$('.projects-change').removeClass('col-6');
	$('.projects-change').addClass('col-12');
	//skills - hide big
	$('.mixer-bg').addClass('hidden-sm-down');
	// $('.mixer-bg').removeClass('offset-xs-2');
	//skills - show small
	$('.mixer-sm').removeClass('hidden-sm-down');
}


// switches order of divs in experiences section depending on viewport
$( document ).ready(function() {
	//small and portrait
	if ($(window).width() < 768 && window.innerHeight > window.innerWidth) {
		small_port();
	} else {
		not_small_port();
	}

	//small and landscape
	console.log('loading');
	if ($(window).width() < 768 && window.innerHeight < window.innerWidth) {
		small_land();
	} else {
		not_small_land();
	}
});

$( window ).resize(function() {
	//small and portrait
	if ($(window).width() < 768 && window.innerHeight > window.innerWidth) {
		small_port();
	} else {
		not_small_port();
	}

	//small and landscape
	console.log('loading');
	if ($(window).width() < 768 && window.innerHeight < window.innerWidth) {
		small_land();
	} else {
		not_small_land();
	}
});


//
// if(window.innerHeight > window.innerWidth){
//     //portrait
// }
// if(window.innerWidth > window.innerHeight){
//     //landscape
// }
