var Empleado = /** @class */ (function () {
    //define a constructor of the class
    function Empleado(name, lastname, age, tel) {
        if (tel === void 0) { tel = 0; }
        this.nss = 1111112222;
        this.nombre = name;
        this.lastname = lastname;
        this.age = age;
        this.tel = tel;
    }
    // just put the name of the method to declare a function inside the class
    Empleado.prototype.set_married = function () {
        // class method
        this.married = true;
    };
    Empleado.prototype.get_nss = function () {
        return this.nss;
    };
    Empleado.prototype.get_full_name = function () {
        return this.nombre + " " + this.lastname;
    };
    return Empleado;
}());
var Estudiante = /** @class */ (function () {
    // como construir un metodo, declarar propiedades y asignarle el valor de los parametros
    // mas conciso
    function Estudiante(nombre, lastname, schoolId) {
        this.nombre = nombre;
        this.lastname = lastname;
        this.schoolId = schoolId;
    }
    return Estudiante;
}());
function main() {
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
