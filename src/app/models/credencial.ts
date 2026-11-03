// Creamos una clase llamada Credencial.
// Representa los datos necesarios para iniciar sesión.
export class Credencial {

    // El constructor recibe dos parámetros:
    // userName: nombre del usuario.
    // password: contraseña.
    constructor(
        public userName: string,
        public password: string,
    ){}

}
