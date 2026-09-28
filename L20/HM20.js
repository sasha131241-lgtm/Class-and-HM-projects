// //## HW_20_TEXT
// 1.Создайте массив на 10 строк.

// 2.Создайте функцию comparator(a,b), которая  принимает 2 строки  и 
// возвращает 1 - если первое строка длиннее, -1 если вторая строка длиннее, 
// 0 если равны.  
// Используйте синтаксис function declaration, вызовите эту фкнкцию и 
// напечатайте результат.
// Напишите эту эе функцию используя Function Expression и Arrow Function  

// 3.Напишите функцию, которая принимает массив и функуию-компаратор, 
// и возвращает самое большое значение в массиве. Вызовите эту функцию, передав 
// ей массив строк, полученный в первой задаче и функцию, написанную во второй задаче.



const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

function comparator(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}

function declaration(a, b) {
    if (a.length > b.length) {
        return 1;
    }   else if (a.length < b.length) {
        return -1;
    }   else {
        return 0;
    }
}

const comparatorExpression = function(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
};

const comparatorArrow = (a, b) => {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
};
console.log("Результат сравнения строк (function declaration):", declaration("apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"));
console.log("Результат сравнения строк (function expression):", comparatorExpression("apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"));
console.log("Результат сравнения строк (arrow function):", comparatorArrow("apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"));


// Массив строк из первой задачи
const strings1 = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

// 1. Function Declaration
function comparatorDeclaration1(a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
}

// 2. Function Expression
const comparatorExpression1 = function(a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
};

// 3. Arrow Function
const comparatorArrow1 = (a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
};

// Проверка работы всех вариантов компаратора
console.log("Результат (function declaration):", comparatorDeclaration1("apple", "banana")); // -1
console.log("Результат (function expression):", comparatorExpression1("apple", "banana"));   // -1
console.log("Результат (arrow function):", comparatorArrow1 ("apple", "banana"));             // -1

// 4. Функция поиска максимума (третья задача)
function findMax(arr, compareFn) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i += 1) {
        if (compareFn(arr[i], max) === 1) {
            max = arr[i];
        }
    }
    return max;
}

// Вызов функции поиска максимума для нашего массива
const longestString = findMax(strings, comparatorArrow);
console.log("Самое длинное слово в массиве:", longestString); // elderberry