/*

# Install typescript by npm

>npm install -g typescript

# display version of typescript 

>tsc --version

# transpile typescript to javascript

> tsc main.ts

*/

// pure javascript code algo works
function log(message){
	console.log(message);
}

var message = "Hello world";
log(message);


// difference between declare a variable with var o let
function variable_types(){
	// var = scope to near function
	// let = scope to the block

	var number = 1;
	let count = 2;

	for(var i=0; i<5; i++){
		console.log(i);
	}

	console.log(i);
	console.log('-------------')

	for(let j=0; j<5; j++){
		console.log(j);
	}

	//console.log(j) <---- complilation error, j is only accesible inside the for block
}

variable_types();

