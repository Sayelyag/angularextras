// Clase que representa un archivo preparado para enviarse al servidor.
export class FileModel {

    constructor(
        public fileName: string,    // Nombre del archivo.
        public fileContent: string // Contenido convertido a Base64.
    ){}

}
