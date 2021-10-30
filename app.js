const monModuleImporte = require('./monmodule');
const http = require('http');

console.log(process.env.NODE_ENV);
require('dotenv').config()
console.log(process.env.NODE_ENV);


// CHAPTER concerning Events : test with callback only
    /*
    const exemple = require('./events/limite-callbacks_exemple');
    exemple.timer( 
        undefined    // we use 'undefined' as we didn't want to use the 1st callback.
        , undefined    // we use 'undefined' as we didn't want to use the 2nd callback.
        , ()=> console.log('3secondes écoulées')  // here we use a real callback function.
    );
    */

// CHAPTER concerning Events : test with events
    // imports our file
    const file_eventEmitter_exemple = require('./eventEmitter_exemple');
    
    // on the 'timer' who emit events >> we attach a listener for event '3_secondes', who will run a callback function with a console.log.
    file_eventEmitter_exemple.timer.on( '3_secondes', ()=>console.log('3secondes écoulées') );

    // we test our timer
    file_eventEmitter_exemple.launchTimer();