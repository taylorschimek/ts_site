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

$( document ).ready(function() {
	if ($(window).width() < 768) $('.change-row').addClass("row");
	else $('.change-row').removeClass("row");
});

$( window ).resize(function() {
	if ($(window).width() < 768) $('.change-row').addClass("row");
	else $('.change-row').removeClass("row");
});
