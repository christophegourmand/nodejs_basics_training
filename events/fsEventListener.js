
// import 'file system' module
const fs = require('fs');

// place an 'event emitter' using module 'FileWatcher' for any change on file 'bigFile'
const bigFileWatcher = fs.watch('../bigFile');

// place an 'event listener' on the 'file watcher'
    /* EXPLANATION 
        method 'on()' : 
        - 1st param : what event (can be "change" or "error")
        - 2nd param : a callback who receive a param changeType (who tell what change happened)   
    */ 
bigFileWatcher.on("change" , (changeType)=> console.log(changeType) );

