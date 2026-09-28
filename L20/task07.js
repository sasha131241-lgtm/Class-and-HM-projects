const cats = [
  { name: "Барсик", age: 3, color: "серый", weight: 3.5 },
  { name: "Мурка", age: 5, color: "черный", weight: 4.0 },
  { name: "Васька", age: 2, color: "рыжий", weight: 3.2 },
  { name: "Пушок", age: 4, color: "белый", weight: 4.5 },
];

let sortedCats = cats.sort((a, b) => a.age - b.age);
console.log("Коты отсортированы по возрасту", sortedCats);

sortedCats = cats.sort((b, a) => a.age - b.age);
console.log("Коты отсортированы по возрасту", sortedCats);


const sortedCatsByName = cats.sort((a, b) => a.name.localeCompare(b.name));
console.log("Коты отсортированы по имени", sortedCatsByName);

const sortedCatsByWeight = cats.sort((a, b) => a.weight - b.weight);
console.log("Коты отсортированы по весу", sortedCatsByWeight);

const sortedCatsByAgeAndWeight = cats.sort((a, b) => {
  if (a.age === b.age) {
    return a.weight - b.weight;
  }
    return a.age - b.age;
});
console.log("Коты отсортированы по возрасту и весу", sortedCatsByAgeAndWeight);

const res = cats.sort();
console.log("Коты отсортированы по умолчанию", res);