function handleMenu() {
	const currentState = $('#htmlNavigation').css('display');

	if (currentState === 'none') {
		$('#htmlNavigation').css('display', 'inline');
		$('#footer').css('display', 'none');
	} else {
		$('#htmlNavigation').css('display', 'none');
		$('#footer').css('display', 'inline');
	}
}

function handleResize() {
	const width = $(window).width();

	if (width > 768) {
		$('#htmlNavigation').css('display', 'inline');
	} else {
		$('#htmlNavigation').css('display', 'none');
	}
}

$('#menuIcon').click(handleMenu);

$(window).resize(handleResize);
