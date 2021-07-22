//Finished on 7/22/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pzo7g/2212012_challenge_13_intermediate/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');
rl.question("Text: ", txt => {
    fs.writeFile("./challenges/day13/13-2.txt", txt.split("").reverse().join(""), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    rl.close();
});