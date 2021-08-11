//Finished on 8/10/2021
//https://www.reddit.com/r/dailyprogrammer/comments/q8aom/2272012_challenge_16_easy/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("String one: ", s1 => {
    rl.question("String two: ", s2 => {
        rl.close();
        for(let x of s2) {
            s1 = s1.replace(new RegExp(x, "g"),"");
        }
        console.log("Output: " + s1);
    });
});