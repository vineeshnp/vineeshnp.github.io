const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('dbComplete', () =>  {
  console.log('an event occurred!');
});

myEmitter.emit('dbComplete');