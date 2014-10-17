var WebSocket = require('ws');

var ws = new WebSocket('ws://192.168.1.187:8080');
ws.on('open', function(){
    console.log('client connected');
    ws.send('msg from the client');
});