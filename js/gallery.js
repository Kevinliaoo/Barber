function handleHover() {
	$(this).parent().css('height', '600px');
}

function handleUnHover() {
	$(this).parent().css('height', '500px');
}

$('img').hover(handleHover);

$('img').mouseout(handleUnHover);
