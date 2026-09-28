console.log(false == 0); // true (== это нестрогое сравнение, поэтому false приводится к числу 0)
console.log(false === 0); // false (=== это строгое сравнение, поэтому false не равен 0 , значит это boolean and number)

console.log("" == 0); // true (== это нестрогое сравнение, поэтому пустая строка приводится к числу 0 (и 0 == 0) )
console.log("" === 0); // false (=== это строгое сравнение, поэтому пустая строка не равна 0)

console.log(null == undefined); //true(есть правило: null и undefined равны друг другу при нестрогом сравнении и не равны ничему другому)
console.log(null === undefined); //false( разные типы данных)

console.log("55" == 55); //true( 55 число приводиться к 55)
console.log("55" === 55); //false( разные типы ) 

console.log("true" == true); //false(При нестрогом сравнении строки и boolean оба значения  приводятся к числам:(true приводится к 1)Строка "true" приводится к числу Number("true"), что дает NaN (Not a Number).
console.log("true" === true); // False

console.log((0.2 + 0.1 - 0.3) == true); // false
console.log((0.2 + 0.1 - 0.3) === true); // false

console.log((0.2 + 0.1 - 0.3) == false); // false
console.log((0.2 + 0.1 - 0.3) === false); // false