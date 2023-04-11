const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = 0;
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    for (i of data){
        if(i > 10 && i < 20) {
            result += Number(i);}
        }
    
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});