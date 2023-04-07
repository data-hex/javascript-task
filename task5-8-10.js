const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = [];
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    l = data["movies"]
    for (i=0; i < l.length; i++){

        if(l[i]["release_year"] > 1990){
            result = [...result, l[i]["title"]];
        } else continue;     
        

    }
    // -- ваш код заканчивается тут

    console.log(result.join(", ").toString());
    rl.close();
});