//Finished on 7/19/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pv8zm/2182012_challenge_11_difficult/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const date = new Date();
rl.question("Month: ", (month) => {
    rl.question("Year: ", (year) => {
        console.log("Su Mo Tu We Th Fr Sa");
        let d = new Date(year, month - 1);
        let s = " ".repeat(d.getDay() * 3);
        while (d.getMonth() == month - 1) {
            if (d.getDate() == date.getDate()) {
                s += "\x1b[32m" + (d.getDate() + "").padEnd(3) + "\x1b[0m";
            } else {
                s += (d.getDate() + "").padEnd(3);
            }
            if (d.getDay() == 6)
                s += "\n";
            d.setDate(d.getDate() + 1);
        }
        console.log(s);
        rl.close();
    });
});