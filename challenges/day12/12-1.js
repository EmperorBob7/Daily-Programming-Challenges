//Finished on 7/20/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pv8zm/2182012_challenge_12_easy/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Text: ", (txt) => {
    console.log(getAllPermutations(txt));
    rl.close();
});

function getAllPermutations(string) {
    let results = [];
    if (string.length === 1) {
        results.push(string);
        return results;
    }
    for (let i = 0; i < string.length; i++) {
        let firstChar = string.charAt(i);
        let charsLeft = string.substring(0, i) + string.substring(i + 1);
        let innerPermutations = getAllPermutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}