const cats = [
  { name: "Барсик", age: 3, color: "серый", weight: 3.5 },
  { name: "Мурка", age: 5, color: "черный", weight: 4.0 },
  { name: "Васька", age: 2, color: "рыжий", weight: 3.2 },
  { name: "Пушок", age: 4, color: "белый", weight: 4.5 },
];

const isHeavyCat = cats.some(cat => cat.weight > 4);
if (isHeavyCat) {
  console.log("Есть коты с весом больше 4 кг");
} else {
  console.log("Нет котов с весом больше 4 кг");
}

const isKittenPresent = cats.some(cat => cat.age < 1);
if (isKittenPresent) {
  console.log("Есть котята младше 1 года");
} else {
  console.log("Котята младше 1 года отсутствуют");
}

const allCatsAreGray = cats.every(cat => cat.color === "серый");
if (allCatsAreGray) {
  console.log("Все коты серого цвета");
} else {
    console.log("Не все коты серого цвета");
}    

const allCatsAreAdult = cats.every(cat => cat.age >= 1);
if (allCatsAreAdult) {
  console.log("Все коты взрослые");
} else {
    console.log("Есть котята младше 1 года");
}

const  allCatsAreFat = cats.every(cat => cat.weight > 3);
if (allCatsAreFat) {
  console.log("Все коты с весом больше 3 кг");
} else {
    console.log("Есть коты с весом меньше 3 кг");
}

