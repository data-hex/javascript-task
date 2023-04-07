const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [x1, x2, x3] = input.split(" ").map(Number);

    // -- ваш код начинается тут
    result = Math.max(x1, x2, x3) + Math.min(x1, x2, x3)
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});