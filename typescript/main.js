/*

# Install typescript by npm

>npm install -g typescript

# display version of typescript

>tsc --version

# transpile typescript to javascript

> tsc main.ts

*/
function log(message) {
    console.log(message);
}
function variable_types() {
    // var = scope to near function
    var number = 1;
    var count = 2;
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
    console.log('-------------');
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log(j);
}
var message = "Hello world";
log(message);
variable_types();
