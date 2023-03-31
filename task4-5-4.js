const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let n = Number(input);

    // -- ваш код начинается тут
    result = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
          result += i;          
        }                
      }

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});