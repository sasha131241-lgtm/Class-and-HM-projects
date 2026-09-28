const numbers = [1, 5, 2, 9, 4];
const result = numbers.map(num => num * 10);
console.log("Массив после изменения", result);


const elemPow2 = function(e){
    return e * e;
}

result1=numbers.map(elemPow2);
console.log("Массив после изменения", result); 

const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log("Массив до изменения", fruits);
const result2 = fruits.map(fruit => fruit.length);
console.log("Массив после изменения", result2);    