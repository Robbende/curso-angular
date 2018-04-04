// the inline anotation specify the type of parameters, so if
// at the moment of call the function the paremeters do not fit with the expresion
// then exception error at compilation time is raised.
// you can also make use of interface for this purpose.

interface Point{
	x: number,
	y: number
}

						// in line anotation
let drawPoint = (point: {x: number, y: number})=>{
	//.. draw algorithm

}
					// use interface
let drawPoint2 = (point: Point)=>{
	//.. draw algorithm

}

drawPoint({
	x: 1,
	y: 2
})