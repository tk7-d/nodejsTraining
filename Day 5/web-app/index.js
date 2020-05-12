const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Welcome to web app');
})

server.listen(4242, () => {
    console.log("express server is running");
});