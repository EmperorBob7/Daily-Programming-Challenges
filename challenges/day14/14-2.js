//Finished on 7/23/2021
//https://www.reddit.com/r/dailyprogrammer/comments/q2mwu/2232012_challenge_14_intermediate/

const n = 10000;
let k = n - 2;
let arr = new Array(k + 1).fill(true);
for (let i = 1; i <= n; i++) {
    let j = i;
    while (i + j + 2 * i * j <= k) {
        arr[i + j + 2 * i * j] = false;
        j++;
    }
}
if (n > 2)
    console.log(2);
for (let i = 1; 2 * i + 1 < n; i++) {
    if (arr[i])
        console.log(2 * i + 1);
}