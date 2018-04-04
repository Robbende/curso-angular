class Empleado{
	public nombre:string;
	public lastname:string;
	public age:number;
	public tel:number;
	public married:boolean;
	private nss:number = 1111112222;

	//define a constructor of the class
	constructor(name, lastname, age, tel=0){
		this.nombre = name;
		this.lastname = lastname;
		this.age = age;
		this.tel = tel;
	}

	// just put the name of the method to declare a function inside the class
	set_married(){
		// class method
		this.married = true;
	}

	get_nss(){
		return this.nss;
	}

	get_full_name () {
		return this.nombre + " " + this.lastname;
	}
}


class Estudiante{
	// como construir un metodo, declarar propiedades y asignarle el valor de los parametros
	// mas conciso
	constructor(
		public nombre:string,
		public lastname:string,
		public schoolId:number
	){}
}



function main(){
	var empleado = new Empleado('Ruben', 'Deambrossi', 31, 5552123);

	console.log(empleado);
	console.log(empleado.nombre);
	console.log(empleado.lastname);
	console.log(empleado.get_full_name());
	console.log(empleado.get_nss());
	//console.log(empleado.nss); //<--- compilation error, the variable is private

	console.log('***********************************');

	var estudiante = new Estudiante('Ruben', 'Deambrossi', 20);
	console.log(estudiante);
}

main();