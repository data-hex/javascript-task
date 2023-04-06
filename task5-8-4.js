const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let str = input;

    // -- ваш код начинается тут
    if (str.length > 20) {
        result = str.slice(0, 17).concat("...");

    } else { result = str;
    }



    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});