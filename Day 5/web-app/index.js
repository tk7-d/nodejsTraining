const express = require('express');
const bodyParser = require("body-parser");

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send('Welcome to web app');
});

server.post('/', (req, res) => {
    var dateTime = JSON.stringify(new Date(req.body.time * 1000)).split("T");
    var day = dateTime[0].substring(1);
    var time = dateTime[1].substring(0,5);
    res.send(day + " " + time);
});

server.listen(4242, () => {
    console.log("express server is running");
});