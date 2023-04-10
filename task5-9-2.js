const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    result = data[data.length - 1];

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});