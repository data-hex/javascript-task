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
    if (y>=100) {y=100
    }
    if (y <= 0) {y=0
    }
    if (x <= 0) {x=0
    }
    if (x >= 100) {x=100
    } 
    switch (direction) {
        case "down":
            if (y=100) {y=100
            } 
            else {
            y += 1}
            result = `x: ${x}, y: ${y}, direction: ${direction}`
            break
        case "up":
            if (y = 0) {y=0
            } else {
            y -= 1}
            result = `x: ${x}, y: ${y}, direction: ${direction}`
            break
        case "left":
            if (x = 0) {x=0
            } else {
            x -= 1}
            result = `x: ${x}, y: ${y}, direction: ${direction}`
            break
        case "right":
            if (x = 100) {x=100
            } else {
            x += 1}
            result = `x: ${x}, y: ${y}, direction: ${direction}`
            break
    }



    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});