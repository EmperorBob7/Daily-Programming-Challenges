//Finished on 7/19/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pv8zm/2182012_challenge_11_easy/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
rl.question("Day: ", (day) => {
    rl.question("Month: ", (month) => {
        rl.question("Year: ", (year) => {
            let date = new Date(year, month-1, day);
            console.log("The day of the week is: " + days[date.getDay()]);
            rl.close();
        });
    });
});