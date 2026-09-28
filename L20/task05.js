const cats = [
  { name: "Барсик", age: 3, color: "серый", weight: 3.5 },
  { name: "Мурка", age: 5, color: "черный", weight: 4.0 },
  { name: "Васька", age: 2, color: "рыжий", weight: 3.2 },
  { name: "Пушок", age: 4, color: "белый", weight: 4.5 },
];

const totalWeight = cats.reduce((acc, cat) => acc + cat.weight, 0);
console.log("Общий вес котов", totalWeight);

const catWhithAge2 = cats.find(cat => cat.age === 2);
if (catWhithAge2) {
  console.log("Коты с возрастом 2 года", catWhithAge2);
} else {
    console.log("Коты с возрастом 2 года не найдено");
};

console.log("Коты с возрастом 2 года", catWhithAge2 ? catWhithAge2 : "не найдено"); 



