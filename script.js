let login = prompt('Введите ваш логин:', '');

if (login === 'admin') {
	let password = prompt('Введите ваш пароль:', '');
	if (password === '1234') {
		alert('Здравствуйте!');
	} else if (password === '' || password === null) {
		alert('Отменено.');
	} else {
		alert('Неверный пароль!');
	}
} else if (login === '' || login === null) {
	alert('Отменено');
} else {
	alert('Я вас не знаю!');
}