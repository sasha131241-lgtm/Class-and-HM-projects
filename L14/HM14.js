let astronautName = "Юрий";
let astronautAge = 45;
let isCommander = true;
let planet = "Земля";
let missionDuration = 180;

astronautAge = astronautAge + 10;
missionDuration = missionDuration + 30;

let namemessage = "Астронавт: " + astronautName;
let planetmessage = "Миссия на планете: " + planet;
let isCommandermessage = "Командир миссии: " + isCommander;

console.log(namemessage);
console.log(planetmessage);
console.log(isCommandermessage);

console.log("Возраст астронавта через 10 лет: " + astronautAge);
console.log("Продолжительность миссии через 30 дней: " + missionDuration);

missionDuration = 270;
isCommander = false;

console.log("Продолжительность миссии через 60 дней: " + missionDuration);
console.log("Командир миссии: " + isCommander);
