const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', () => {
  console.log('Started!');
});

emitter.emit('start');
