// Importamos o exportamos la clase Empleado para utilizarla
// en componentes y servicios.
export class Empleado {

    // Constructor con las propiedades de un empleado.
    constructor(
        public idEmpleado: number, // Identificador del empleado.
        public apellido: string,   // Apellido.
        public oficio: string,     // Puesto de trabajo.
        public salario: number,    // Salario.
        public director: number,   // Identificador de su director.
    ){}

}
