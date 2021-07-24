//Finished on 7/23/2021
//https://www.reddit.com/r/dailyprogrammer/comments/q2v2k/2232012_challenge_14_easy/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter a list: ", list => {
    list = list.split(",").map(Number);
    rl.question("Block size: ", n => {
        n = Number(n);
        rl.close();
        for(let i = 0; i<list.length; i+=n) {
            let x = list.splice(i, n).reverse();
            list.splice(i, 0, ...x);
        }
        console.log(list);
    });
});