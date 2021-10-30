const monModuleImporte = require('./monmodule');
const http = require('http');

console.log(process.env.NODE_ENV);
require('dotenv').config()
console.log(process.env.NODE_ENV);


// CHAPTER concerning Events : test with callback only

const exemple = require('./events/limite-callbacks_exemple');
exemple.timer( 
	  undefined    // we use 'undefined' as we didn't want to use the 1st callback.
	, undefined    // we use 'undefined' as we didn't want to use the 2nd callback.
	, ()=> console.log('3secondes écoulées')  // here we use a real callback function.
);

