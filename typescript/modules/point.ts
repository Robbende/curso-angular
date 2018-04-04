/*

	module: any file is a module

	to use this file outside we need to export this class with export keyword, now this file is visible

*/


export class Point{

	public x: number;
	public y: number;

	// typescript can not have multiple constructors
	// the solution is convert tye parameters of the constructor optional (?)
	constructor(x?: number, y?: number){
		this.x = x;
		this.y = y;
	}

	draw(){
		console.log('X: ' + this.x + ' Y: ' + this.y);
	}
}

