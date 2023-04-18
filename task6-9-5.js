const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -- ваш код начинается тут

function createSecretString(data) {
    result = "";
    for (let i = 0; i < data.length; i++) {
        result += data[i][0]
    }
    return result;

}  

// -- ваш код заканчивается тут

rl.on('line', (input) => {
    let data = JSON.parse(input);
    console.log(createSecretString(data));
    rl.close();
});