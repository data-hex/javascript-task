const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -- ваш код начинается тут

function titles(data) {
    let result = [];
    let l = data["movies"];
    for (i=0; i < l.length; i++){
        result = [...result, l[i]["title"]];
    }
    return result.join(", ").toString()

}  

// -- ваш код заканчивается тут

rl.on('line', (input) => {
    let data = JSON.parse(input);
    console.log(titles(data));
    rl.close();
});