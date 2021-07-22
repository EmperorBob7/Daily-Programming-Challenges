//Finished on 7/22/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pzo4w/2212012_challenge_13_easy/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

rl.question("Month: ", month => {
    rl.question("Day: ", day => {
        rl.question("Year: ", year => {
            month = Number(month);
            day = Number(day);
            year = Number(year);
            month--;
            let dayOfYear = 0;
            for(let i = 0; i<month; i++) {
                dayOfYear += days[i];
            }
            dayOfYear += day;
            if(year % 4 == 0 && month > 1) {
                dayOfYear++;
            }
            console.log("The day of the year is: " + dayOfYear);
            rl.close();
        });
    });
});