const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Сумма чисел", sum);


const mult = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Произведение чисел", mult);

const multi = numbers.reduce((acc, n) => acc * n, 1);
console.log("Произведение чисел", multi);

const concat= numbers
.reduce((acc, n) => acc + n,"" );
console.log("Конкатенация чисел", concat);

const avgResult= numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
console.log("Среднее значение", avgResult);

