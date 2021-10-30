// imports module EventEmitter:
const EventEmitter = require('events');

// create instance of the class EventEmitter
var timer = new EventEmitter(); // I add 'var' but the tutorial didn't

// create methode launchTimer, but only with event emitters (lsat time we used callbacks only)
function launchTimer() {
    setTimeout( ()=> timer.emit('1_seconde') , 1000);
    setTimeout( ()=> timer.emit('2_secondes') , 2000);
    setTimeout( ()=> timer.emit('3_secondes') , 3000);
}

// exports all :
exports.timer = timer;
exports.launchTimer = launchTimer;
