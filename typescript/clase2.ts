
/*

	Access Modifiers

	Public = (default)
	Private = 
	Protected = 

*/


class Point{

	private x: number;
	public y: number;

	// typescript can not have multiple constructors
	// the solution is convert tye parameters of the constructor optional (?)
	constructor(x?: number, y?: number){
		this.x = x;
		this.y = y;
	}

	// properties, getter and setter
	// outside it look like a field, but internally is a method
	get X(){
		return this.x;
	}

	set X(value){
		if value < 0{
			throw new Error('value cannot be less than 0.');
		}

		this.x = value;
	}

	draw(){
		console.log('X: ' + this.x + ' Y: ' + this.y);
	}
}


let point = new Point(10, 20);
let x = point.X;



point.draw();


