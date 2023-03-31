const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let stars = Number(input);

    switch (stars) {
        case 1:
            result = "★"
            break
        case 2:
            result = "★★"
            break
        case 3:
            result = "★★★"
            break
        case 4:
            result = "★★★★"
            break
        case 5:
            result = "★★★★★"
            break
}

console.log(result);

    rl.close();
});