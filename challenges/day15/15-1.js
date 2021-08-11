//Finished on 8/09/2021
//https://www.reddit.com/r/dailyprogrammer/comments/q4c34/2242012_challenge_15_easy/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');

rl.question("Left or Right: ", x => {
    fs.readFile('challenges/day15/15-1.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.split("\n");
        let max = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].length > max)
                max = data[i].length;
        }
        if (x == "l") {
            data.forEach(t => {
                console.log(t.trimStart());
            });
        } else {
            data.forEach(t => {
                console.log(t.padStart(max));
            });
        }
    });
    rl.close();
});