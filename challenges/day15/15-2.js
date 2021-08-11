//Finished on 8/09/2021
//https://www.reddit.com/r/dailyprogrammer/comments/q4bk1/2242012_challenge_15_intermediate/

function run() {
    let arr = [];
    for (let i = 0; i < 30; i++) {
        arr[i] = [];
        for (let j = 0; j < 30; j++) {
            arr[i].push(1);
        }
    }
    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 30; j++) {
            for (let k = 0; k < 30; k++) {
                while (arr[j][k] > 0) {
                    let x = Math.floor(Math.random() * 4);
                    switch (x) {
                        case 0:
                            if (k == 0)
                                arr[j][k + 1]++;
                            else
                                arr[j][k - 1]++;
                            break;
                        case 1:
                            if (k == 29)
                                arr[j][k - 1]++;
                            else
                                arr[j][k + 1]++;
                            break;
                        case 2:
                            if (j == 0)
                                arr[j + 1][k]++;
                            else
                                arr[j - 1][k]++;
                            break;
                        case 3:
                            if (j == 29)
                                arr[j - 1][k]++;
                            else
                                arr[j + 1][k]++;
                            break;
                    }
                    arr[j][k]--;
                }
            }
        }
    }
    let c = 0;
    //let t = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[j][i] == 0)
                c++;
            //t += arr[j][i];
        }
    }
    //console.table(arr);
    //console.log(t);
    return c;
}

let accum = 0, runCount = 10;
for (let i = 0; i < runCount; i++) {
    accum += run();
}
console.log(accum /= runCount);