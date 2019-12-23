const EventEmiiter = require('events');

// Create Class
class MyEmitter extends EventEmiiter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init Event run log เมื่อเรียก 'event'
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
