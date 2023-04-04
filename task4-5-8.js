const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [x1, x2, x3] = input.split(" ").map(Number);
    let max;
    let min;

    // -- ваш код начинается тут
    if (x1 < x2) {
        min = x1;
        max = x2;
    } else {
        min = x2;
        max= x1;
    }
    if (x3 < min) {
        min = x3;
    }
    if (x3 > max) {
        max = x3;
    }

    result = `минимальное: ${min}, максимальное: ${max}`



    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});