// Clase que representa a un equipo de fútbol.
export class Equipo {

    constructor(
        public idEquipo: number,   // Identificador del equipo.
        public nombre: string,    // Nombre del equipo.
        public imagen: string,    // URL de su imagen.
        public champions: number, // Champions ganadas.
        public web: string,       // Página web del equipo.
        public descripcion: string, // Descripción del equipo.
        public finalista: number  // Número de finales.
    ){}

}
