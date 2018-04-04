/*  Variables Types  */

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3] //array
let f: any[] = [1, true, 'a', false] //try to avoid this

enum Color { Red = 0, Green = 1, Blue = 2} //enumerable
let backgroundcolor = Color.Red;


/*  Type Assertions */

let message; // the variable is declare by defaul as any
message = 'abc';
// ways to notify to the IDE about the type of the variable
let endsWithC = (<string>message).endsWith('c'); // the type assertion is only for get intellingence features on IDE
let alternativeWay = (message as string).endsWith('c');