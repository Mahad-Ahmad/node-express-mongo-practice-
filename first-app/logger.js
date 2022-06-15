// var url = "http://logger.io.com";
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", (args) => {
  console.log("message", args);
});

function log(message) {
  // send an http request for logging message
  console.log(message);

  emitter.emit("message", { id: 1 });
}

// module.exports.log = log;
exports.log = log;
