//Finished on 7/22/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pzobz/2212012_challenge_13_difficult/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let score1 = score2 = 0;
//0 = rock, 1 = paper, 2 = scissors
const matchup = {
    "0": {
        "0": draw,
        "1": p2,
        "2": p1
    },
    "1": {
        "0": p1,
        "1": draw,
        "2": p2
    },
    "2": {
        "0": p2,
        "1": p1,
        "2": draw
    }
};
const text = ["rock", "paper", "scissors"];
let txt;
(async () => {
    while (txt != "done") {
        await game();
    }
    rl.close();
})();
function game() {
    return new Promise((res) => {
        rl.question("Type 'done' to quit: ", t => {
            txt = t;
            if (txt == "done")
                return res("done");
            let r1 = Math.floor(Math.random() * 3);
            let r2 = Math.floor(Math.random() * 3);
            matchup[r1][r2]();
            console.log(`${text[r1]} versus ${text[r2]}`);
            console.log(`Score ${score1} to ${score2}`);
            res("sheeesh");
        });
    });
}
function draw() {
    
}
function p1() {
    score1++;
}
function p2() {
    score2++;
}