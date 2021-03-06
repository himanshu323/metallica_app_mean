const app = require('express')();
let config = require("./config/config");
const http = require('http').Server(app);
const market = require('./market');
const io = require('socket.io')(http);


const port = process.env.PORT || 3004;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");


    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");

    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS,PUT")
    next();
});

app.get('/api/market', (req, res) => {

   
    res.status(200).send(market.marketPositions);
});

setInterval(function () {
    market.updateMarket();
    
    io.sockets.emit('market', market.marketPositions);
}, 5000);


io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});

module.exports={app};