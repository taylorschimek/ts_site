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
