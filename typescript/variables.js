/*  Variables Types  */
var a;
var b;
var c;
var d;
var e = [1, 2, 3]; //array
var f = [1, true, 'a', false]; //try to avoid this
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //enumerable
var backgroundcolor = Color.Red;
/*  Type Assertions */
var message; // the variable is declare by defaul as any
message = 'abc';
// ways to notify to the IDE about the type of the variable
var endsWithC = message.endsWith('c'); // the type assertion is only for get intellingence features on IDE
var alternativeWay = message.endsWith('c');
