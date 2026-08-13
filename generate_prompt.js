const fs = require('fs');
let html = fs.readFileSync('c:/Users/Gagik/Desktop/Новая папка (2)/index.html', 'utf8');
const carsMatch = html.match(/const CARS = (\[[\s\S]*?\]);/);
if (carsMatch) {
    let cars = JSON.parse(carsMatch[1]);
    let promptText = `Привет! Мне нужно полностью обновить каталог автомобилей на сайте. Пожалуйста, замени текущий массив CARS (или аналогичный массив данных) на этот новый, в котором ровно ${cars.length} авто. Ничего не выдумывай и не меняй в данных, просто вставь этот массив.

Вот новые данные:
\`\`\`javascript
const CARS = ${JSON.stringify(cars, null, 2)};
\`\`\`
`;
    fs.writeFileSync('C:/Users/Gagik/Desktop/Новая папка (2)/prompt_for_ai.txt', promptText, 'utf8');
    console.log('Created prompt file');
}
