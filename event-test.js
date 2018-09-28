//import events mudule
var events = require("events");

//create an eventEmmiter object 
var eventEmitter = new events.EventEmitter();

//Create an events handler as follows;
var connectHandler = function connected(){
    console.log("connect sucessful");

    //Fire the data_received event
   eventEmitter.emit('data_received');
}

//bind the connection event with the handler
eventEmitter.on("connection", connectHandler);

//Bind the data_received event with the anonymous function
eventEmitter.on("data_received", function(){
    console.log("data received sucessful");
});

//Fire the connection event
eventEmitter.emit("connection");

console.log("program ended");

