// function sayHello(name) {
//   console.log("Hello" + name);
// }

// sayHello("Mahad");

// const log = require("./logger");

// log.log("hello");

// logger.logger("message");

// const fs = require('fs');

// fs.readdirsync('./')

// fs.readdir('./1', function(err, files) {
//     if (err) console.log("error", err)
//     else console.log("Result", files)
// })

// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// emitter.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// })

// emitter.emit('messageLogged', {id: 1, url: 'http://'});

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000");
