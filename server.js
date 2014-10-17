var WebSocketServer = require('ws').Server,
    wss =  new WebSocketServer({port:8080});

wss.on('connection', function(ws){

    ws.on('message', function(msg){
        console.log('received: %s', msg);
        wss.broadcast(msg);
    });

    ws.send('something');

});

wss.broadcast = function(data){
    for(var i in this.clients){
        this.clients[i].send(data);
    }
};



