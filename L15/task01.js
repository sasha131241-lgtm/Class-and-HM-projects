console.log("Hello World!");

// alt+shift+f - форматирование кода
//alt+shift+down - дублирование строки
//alt+shift+up - перемещение строки вверх
//ctrl+shift+f - поиск по проекту
//ctrl+shift+r - поиск и замена по проекту
//ctrl+shift+s -save all
//ctrl+shift+e - открыть проводник
//ctrl+shift+` - открыть терминал
//Ctrl+F5 - run without debugging


let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    email: "john@example.com",
    "City": "New York",
    "is a developer": true
}

console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user.email);
console.log(user.City);
console.log(user["is a developer"]);

console.log(user["name"]);
let fieldName = "age";
console.log(user[fieldName]);
user["SecondName"] = "Smith";
console.log(user.SecondName);

console.log("-------------------");
console.log(user);

let userLson = JSON.stringify(user);
console.log(userLson);
console.log(typeof userLson);
console.log(user.name);
console.log(userLson.name); // undefined

let productJson ='{"name":"Iphone 14","price":1000  ,"isAvailable":true}';
let product = JSON.parse(productJson);
console.log(product); //{ name: 'Iphone 14', price: 1000, isAvailable: true }
console.log(typeof product); // object
console.log(product.name); // Iphone

