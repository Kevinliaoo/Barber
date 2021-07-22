// Get elements from document
const button = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const mailInput = document.getElementById('mailInput');
const msgField = document.getElementById('msgField');
const nameMsg = document.getElementById('nameMsg');
const mailMsg = document.getElementById('mailMsg');
const msgMsg = document.getElementById('msgMsg');
const submitMsg = document.getElementById('submitMsg');

function onSubmit() {
	// Check the name
	const name = nameInput.value;
	const mail = mailInput.value;

	const nameIsInvalid = name === '';
	const mailIsInvalid = !mail.includes('@');
	const msgIsInvalid = msgField.value.length < 10;

	if (nameIsInvalid) {
		// Display the message
		nameMsg.textContent = 'Please insert your name!!';
	} else {
		nameMsg.textContent = '';
	}

	// Check if the mail has a @
	if (mailIsInvalid) {
		// Invalid email
		mailMsg.textContent = 'Invalid email address';
	} else {
		mailMsg.textContent = '';
	}

	if (msgIsInvalid) {
		msgMsg.textContent = 'Please insert more than 10 characters';
	} else {
		msgMsg.textContent = '';
	}

	if (!nameIsInvalid && !mailIsInvalid && !msgIsInvalid) {
		submitMsg.textContent = 'Thak you for submitting the message!! :)';

		nameInput.value = '';
		mailInput.value = '';
		msgField.value = '';
	} else {
		submitMsg.textContent = '';
	}
}

$('form').submit(function (e) {
	e.preventDefault();
});

$('#submitBtn').click(onSubmit);
