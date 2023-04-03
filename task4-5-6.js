const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [x, y, direction] = input.split(" ");

    x = Number(x);
    y = Number(y);

    // -- ваш код начинается тут
    switch (direction) {
        case "down":
            y += 1
            result = `x: ${x}, y: ${y}, direction: ${direction}`
            break
        case "up":
            y -= 1
            result = `x: ${x}, y: ${y}, direction: ${direction}`
            break
        case "left":
            x -= 1
            result = `x: ${x}, y: ${y}, direction: ${direction}`
            break
        case "right":
            x += 1
            result = `x: ${x}, y: ${y}, direction: ${direction}`
            break
    }



    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});