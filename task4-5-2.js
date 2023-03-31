const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let num = Number(input);

    // -- ваш код начинается тут
    
        if (num > 0) {
            result = "Число позитивное";
            
        } else if (num < 0) {
            result = "Число негативное";
            
        } else {
            result = "Число равно 0";
        }
            
    



    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});