let number = 2222;
do {
    console.log(number);
    number *= 2;
} while (number < 2050);

console.log("1=================");

let fruts = ["banana", "apple", "orange"];
for (let i = 0; i < fruts.length; i += 1) {
    console.log(fruts[i]);
}

console.log("2=================");

// Перезаписываем массив без повторного объявления let
fruts = ["banana", "apple", "orange"];
for (let i = 0; i < fruts.length; i += 1) {
    fruts[i] = fruts[i] + "!";
    console.log(fruts);
}

console.log("3=================");

let counter = 0;
while (counter < fruts.length) {
    console.log(`${counter + 1}. ${fruts[counter]}`);
    counter += 1;
}

console.log("4=================");

// Перебор массива без попытки вывести frut снаружи
for (let frut of fruts) {
    console.log(frut);
    frut = "kiwi";
}

console.log(fruts);


