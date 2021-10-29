const fs = require('fs'); // imports 'file system' module


/**
* Generate Datas, for exercise purpose only.
* (generate number between 0 to 10, as a string,
* and repeat a million times)
*/
function generateData() {
    let data = '1';
    for (i=0; i<1000000; i++) {
        data = data + Math.random() * 10;
    }
    return data;
}

/**
* Calculate the duration of the callback to run (in ms)
*/
function callback(){
    console.log("Process 'bigFile' ended, duration: " + (Date.now() - date_endCallback) + "ms.");
}
    /* explanations 
        <Date.now()> represents the moment when the callback is called.
        <date> : variable representing the moment when the callback ends.
    */

// we can write our file (GOAL 1 achieved)
fs.writeFile('bigFile', generateData(), callback)

const date_endCallback = Date.now(); 

// verify if script is now available
console.log('available');

// READ OUR FILE

/**
* Read a file, and pass errors and datas to a callback function.
* param 1: url of file
* param 2: callback receiving as param: (errors ,  datas) 
*/
fs.readFile(
    'bigFile',
    (err, data) => {
        // handle potential errors
        if (err) {
            throw new Error ('Error detected');
        }

        // handle datas
        console.log(data);
    }
);
