//Finished on 8/13/2021
//https://www.reddit.com/r/dailyprogrammer/comments/qit0h/352012_challenge_18_easy/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter a phone number: ", x => {
    let rest = x.substring(x.lastIndexOf("-") + 1);
    x = x.substring(0, x.lastIndexOf("-")+1);
    rest = rest.toLowerCase();
    for (let i = 0; i < rest.length; i++) {
        if(i == 3)
            x += "-";
        x += getCode(rest.charAt(i));
    }
    console.log(x);
    rl.close();
});
const str = "22233344455566677778889999";
function getCode(x) {
    let t = x.charCodeAt(0) % 97;
    return str.charAt(t);
}