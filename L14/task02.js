// без обьектов

let userName = "Vasya";
let userAge = 25;
let isStudent = true;


console.log("Age =",userAge);
console.log("Name =",userName);
console.log("isStudent =",isStudent);


// в виде обьекта

let user = {
    name: "Ivan",
    age: 22,
    isStudent: true
};

console.log(user);
console.log(user.name);

user.age = 26
console.log(user);

user.email = "Ivan@example.com"
console.log(user);

delete user.isStudent;
console.log(user);

const user1 = {
    name: "Jack",
    age: 20,
};

console.log(user1);
// user1= 21;  ***ERROR***
// user1=user 
user1.age = 21;
user1.email = "test@example.com";
console.log(user1);
console.log(typeof user1, typeof user1.name);