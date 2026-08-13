const fs = require('fs');

let appJs = fs.readFileSync('C:/Users/Gagik/Desktop/erevi/carz3 site/app.js', 'utf8');
let html = fs.readFileSync('C:/Users/Gagik/Desktop/erevi/carz3 site/index.html', 'utf8');
let htmlMy = fs.readFileSync('C:/Users/Gagik/Desktop/Новая папка (2)/index.html', 'utf8');

const myCarsMatch = htmlMy.match(/const CARS = (\[[\s\S]*?\]);/);
let myCars = JSON.parse(myCarsMatch[1]);
let myCarNames = myCars.map(c => (c.brand + ' ' + c.model).toLowerCase().trim());

let matchApp = appJs.match(/brand:\s*['\"].*?['\"]/g);
if (matchApp) {
    let brands = [...appJs.matchAll(/brand:\s*['\"](.*?)['\"]/g)].map(m => m[1]);
    let models = [...appJs.matchAll(/model:\s*['\"](.*?)['\"]/g)].map(m => m[1]);
    
    let otherCarNames = [];
    for(let i = 0; i < brands.length; i++) {
        otherCarNames.push((brands[i] + ' ' + models[i]).toLowerCase().trim());
    }
    
    let overlap = myCarNames.filter(name => otherCarNames.includes(name));
    let uniqueOverlap = [...new Set(overlap)];
    console.log('Overlap count:', uniqueOverlap.length);
    console.log('Overlapping cars:', uniqueOverlap.join(', '));
} else {
    console.log('Could not find brand declarations in app.js');
}
