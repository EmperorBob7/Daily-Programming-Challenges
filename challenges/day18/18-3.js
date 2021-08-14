//Finished on 8/13/2021
//https://www.reddit.com/r/dailyprogrammer/comments/qit0h/352012_challenge_18_easy/
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const { createCanvas } = require('canvas');
const fs = require('fs')

rl.question("Enter an odd number:", x => {
    rl.close();
    x = Number(x);
    const canvas = createCanvas(x * 10, x * 10);
    const ctx = canvas.getContext('2d');

    let left = 0, right = x - 1, top = 0, bottom = x - 1;
    let arr = [];
    for (let i = 0; i < x; i++) {
        arr[i] = [];
        for (let j = 0; j < x; j++) {
            arr[i].push("0");
        }
    }
    for (; left <= right;) {
        console.log(top, left, bottom, right);
        for (let i = bottom; i >= top; i--) {
            arr[i][left] = "1";
        }
        bottom--;
        left++;
        for (let i = left; i <= right; i++) {
            arr[top][i] = "1";
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            arr[i][right] = "1";
        }
        right--;
        left++;
        for (let i = right; i >= left; i--) {
            arr[bottom][i] = "1";
        }
        right--;
        bottom--;
        top++;
        console.log(left, right);
        console.log(top, bottom);
    }
    ctx.fillStyle = "red";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == "1")
                ctx.fillRect(j * 10, i * 10, 10, 10);
        }
    }
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('challenges/day18/18-3.png', buffer);
});