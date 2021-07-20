//Finished on 7/20/2021
//https://www.reddit.com/r/dailyprogrammer/comments/pv8zm/2182012_challenge_12_difficult/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const sound = require("sound-play");

rl.question("Enter a few notes (A-G): ", async note => {
    note = note.toLowerCase();
    rl.close();
    try {
        let x = note.split("");
        for(let i = 0; i<x.length; i++)
            await sound.play(`C:\\Users\\emper\\OneDrive\\Documents\\GitHub\\Daily-Programming-Challenges\\audio\\${x[i]}.mp3`);
        console.log("done");
      } catch (error) {
        console.error(error);
      }
});