//Finished on 8/09/2021
//https://www.reddit.com/r/dailyprogrammer/comments/q4dz1/2242012_challenge_15_difficult/

const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 8080;
const app = express();
const server = app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
// Static files
app.use(express.static(__dirname + "/public"));

// Socket setup
const io = socket(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

io.on("connection", function (socket) {
    socket.on("bruh", x => {
        io.emit("bruhBack",x.split("").reverse().join(""));
    });
});