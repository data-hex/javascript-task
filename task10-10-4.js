const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [A, B] = input.split(" | ");

    A = new Set(JSON.parse(A));
    B = new Set(JSON.parse(B));

    // -- ваш код начинается тут
    for (const key of B.keys()){
        if (A.has(key)) {
            A.delete(key);
            }
    }
    result = A;


    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});