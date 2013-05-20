var Leap = require('leapjs/lib').Leap;

var osc = require('node-osc');

var client = new osc.Client('127.0.0.1', 9000);

Leap.loop(function(frame){
	if(frame.fingers.length===1){
		client.send('/finger', frame.fingers[0].tipPosition[0]);
		//console.log(frame.fingers[0]);
	}
	else{
		client.send('/finger', 'nada');
	}
});