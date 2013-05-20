///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 8000});

var users = [];

var val = 0;

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

var osc = require('node-osc');

var client = new osc.Client('127.0.0.1', 9000);

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

wss.on('connection', function(ws) {
    
	users.push(ws);
    console.log(users.length + ' users online');

	if(users.length===1){
		users[0].send('ready');
	}

    ws.on('message', function(message) {
        if(val!==message) client.send('/oscAddress', message);;
        val = message;
        ws.send('ready');
    });

    ws.on('close',function(){
    	for(var i=0;i<users.length;i++){
    		if(users[i]===ws){
    			users.splice(i,1);
    			break;
    		}
    	}
    	if(users.length>0){
			users[0].send('ready');
		}
    });
});

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////