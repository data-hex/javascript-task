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
    let newMovie = {
        "id": 11,
        "title": "The Green Mile",
        "release_year": 1999,
        "genre": "Drama",
        "rating": 9
      };

    let listMovie = [...l, newMovie]
    for (i=0; i < listMovie.length; i++){        
        result = [...result, listMovie[i]["title"]];     

    }
    // -- ваш код заканчивается тут

    console.log(result.join(", ").toString());
    rl.close();
});