const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = "";
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    data.shift();
    for(i = 0; i < data.length; i++){
        result = result.concat(', ', data[i])
    }
    result = result.slice(2)

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});