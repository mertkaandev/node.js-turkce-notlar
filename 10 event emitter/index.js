const events = require('events');
const eventEmitter = new events.EventEmitter();

//Bir olay yakalayıcı yaratın
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Olay işleyicisini bir olaya atayın:
eventEmitter.on('scream', myEventHandler);

//'Scream' olayını başlat.
eventEmitter.emit('scream');
