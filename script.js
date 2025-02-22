inBegin:
do { 
	let n = prompt('Привет. Введи любое число n, и перед тобой появится список простых чисел, в интервале от 2 до n. ');
let result = `Список простых чисел в интервале от 2 до ${n}: `;

outer:
for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue outer;
	}
	result = result + i + ', ';
}
if (n == null || n == undefined) {
	alert('Не хочешь - как хочешь. Покааа -.-');
} else if (n == ''){
	alert('Не оставляй поле пустым, введи число!');
	continue inBegin;
} else {
	alert(result);
}
break;
} while (true)