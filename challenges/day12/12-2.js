//Finished on 7/20/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pv8zm/2182012_challenge_12_intermediate/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Number: ", (num) => {
    console.log(getFactors(Number(num)));
    rl.close();
});
function getFactors(num) {
    let arr = [];
    if(checkPrime(num))
        return [num];
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            num /= i;
            arr.push(...getFactors(i));
            i = 1;
        }
    }
    return arr;
}

function checkPrime(n) {
    let i, flag = true;
    for (i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}