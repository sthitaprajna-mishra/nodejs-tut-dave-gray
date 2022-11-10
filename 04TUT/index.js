const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmmitter extends EventEmitter {}

// initialize the object
const myEmmitter = new MyEmmitter();

// add listener for the log event
myEmmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emit event
  myEmmitter.emit("log", "Log event emitted!");
}, 2000);
