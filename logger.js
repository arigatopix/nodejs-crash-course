const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // function แสดงผล log เมื่อเรียก emit ระบุว่า 'message'

    // กำหนดค่า ถ้าเรียก on('message') ให้แสดงผล log
    this.emit('message', { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
