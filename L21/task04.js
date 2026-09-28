async function printWeather() {
    const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');
        console.log(response);
    }

console.log('=======Fetch wichout await =======');
let res = fetch('https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');
console.log(res);

console.log('=======Fetch with await =======');
printWeather();

// пример непрпвильного использования await в коде вверхнего уровня 
//  const response = await fetch(
        // 'https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');
        // console.log(response);

        
        