//Finished on 8/13/2021
//https://www.reddit.com/r/dailyprogrammer/comments/qivpg/352012_challenge_18_intermediate/
const fs = require('fs');
let output = "<html>\n<body>\n<form>\n";
fs.readFile('challenges/day18/in.txt', 'utf8', function (err, data) {
    data = data.replace(/:/g, "").split("\r\n");
    for (let i = 0; i < data.length; i++) {
        let x = data[i], params, name;
        if (x.includes("(")) {
            name = x.substring(0, x.indexOf("(")).trim();
            params = x.substring(x.indexOf("(") + 1, x.length - 1).split(", ");
        } else {
            output += x + ":\n";
            output += `<input type="text" name="${x.toLowerCase()}"/>\n<br/>\n`;
            continue;
        }
        output += name + ":\n";
        if (params.length >= 5) {
            output += `<select name="${name.toLowerCase()}">\n`;
            for (let j = 0; j < params.length; j++) {
                let t = params[j], val = t.substring(1, t.indexOf("]"));
                output += `<option value="${val.toLowerCase()}">${val + t.substring(2 + val.length)}</option>\n`;
            }
            output += "</select>\n<br/>\n";
        } else {
            for (let j = 0; j < params.length; j++) {
                let t = params[j], val = t.substring(1, t.indexOf("]"));
                output += `<input type="radio" name="${name.toLowerCase()}" value="${val.toLowerCase()}"/> ${val + t.substring(2 + val.length)}\n`;
            }
            output += "<br/>\n";
        }
    }
    output += `<input type="submit" value="Submit"/>\n</form>\n</body>\n</html>`;
    fs.writeFile("challenges/day18/out.txt", output, (err) => {
        if (err)
            console.log(err);
    });
});