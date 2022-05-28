


let sum = 0;
let limit = 1000;

for (var i = 0; i < limit; i++) {
	if (i % 3 == 0) {
		sum += i;
	}
	if (i % 5 == 0) {
		sum += i;
	}
	if (i % 5 == 0 && i % 3 == 0) {
		sum = sum - i;
	}
}

console.log("Сумма всех чисел кратных 3 и 5 до " + limit + " равна = " + sum);





































































