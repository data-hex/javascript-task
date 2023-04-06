const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let str = input;
    let vowels = 0;
    let consonants = 0;

    str = str.toLowerCase();

    // -- ваш код начинается тут
    let arr_v = str.match(/[ауоыиэяюёе]/g);
    vowels = arr_v.length;
    let arr_c = str.match(/[бвгджзйклмнпрстфхцчшщ]/g);
    consonants = arr_c.length;

    result = `согласных: ${consonants}, гласных: ${vowels}`;




    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});