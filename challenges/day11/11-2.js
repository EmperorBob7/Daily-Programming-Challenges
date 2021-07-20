//Finished on 7/19/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pv8zm/2182012_challenge_11_intermediate/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const map = {
    0: 0,
    1: 1,
    2: 5,
    5: 2,
    6: 9,
    8: 8,
    9: 6
};

let b = true;
let c = 0;
for (let i = 0; i < 10000; i++) {
    i += "";
    let str = "";
    for (let j = i.length - 1; j >= 0; j--) {
        let x = map[i.charAt(j)];
        if (x == null)
            continue;
        str += x;
    }
    if (str == i) {
        if (b && i > 1961) {
            console.log(str);
            b = false;
        }
        c++;
    }
}
console.log(c);
rl.close();