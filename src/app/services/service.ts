// Importamos Injectable para crear el servicio.
import { Injectable } from "@angular/core";

// HttpClient permite hacer peticiones HTTP.
// HttpHeaders permite configurar las cabeceras.
import {
    HttpClient,
    HttpHeaders
} from "@angular/common/http";

// firstValueFrom convierte Observable en Promise.
// Observable es el tipo de respuesta de las peticiones HTTP.
import {
    firstValueFrom,
    Observable
} from "rxjs";

// Importamos la URL del servidor.
import { environment } from "../../environments/environment.development";

// Importamos el modelo del archivo.
import { FileModel } from "../models/filemodel";


// Registramos el servicio.
@Injectable()

export class Service {

    // Guardamos la URL base.
    url = environment.url;

    // Inyectamos HttpClient.
    constructor(
        private _http: HttpClient
    ) {}


    // -----------------------------------------
    // MÉTODO 1: SUBIR IMAGEN
    // -----------------------------------------

    // Recibe una imagen de tipo File.
    async subirFoto(imagen: File): Promise<any> {

        // Convertimos la imagen a Base64.
        const base64 = await this.convertirBase64(imagen);

        // Creamos un objeto con el nombre y el contenido.
        const datos = {
            fileName: imagen.name,
            fileContent: base64
        };

        // Convertimos el objeto a JSON.
        let json = JSON.stringify(datos);

        // Indicamos el endpoint.
        let endpoint = "api/testingfiles";

        // Indicamos que enviamos JSON.
        let header = new HttpHeaders()
            .set("content-type", "application/json");

        // Realizamos una petición POST.
        return firstValueFrom(
            this._http.post(
                this.url + endpoint,
                json,
                { headers: header }
            )
        );
    }


    // -----------------------------------------
    // MÉTODO 2: POST FOTO CON FILEMODEL
    // -----------------------------------------

    // Recibe un objeto FileModel.
    // Devuelve un Observable.
    postFoto(filemodel: FileModel): Observable<any> {

        // Convertimos el objeto a JSON.
        let json = JSON.stringify(filemodel);

        // Creamos las cabeceras.
        let header = new HttpHeaders()
            .set("content-type", "application/json");

        // Endpoint para subir archivos.
        let endpoint = "api/testingfiles";

        // Enviamos los datos mediante POST.
        return this._http.post(
            this.url + endpoint,
            json,
            { headers: header }
        );
    }


    // -----------------------------------------
    // MÉTODO 3: CONVERTIR IMAGEN A BASE64
    // -----------------------------------------

    // Método privado: solamente se utiliza dentro del servicio.
    // Recibe una imagen y devuelve una Promise<string>.
    private convertirBase64(imagen: File): Promise<string> {

        // Creamos una nueva Promise.
        return new Promise((resolve, reject) => {

            // Creamos un lector de archivos.
            const reader = new FileReader();

            // Leemos la imagen como Data URL.
            reader.readAsDataURL(imagen);

            // Se ejecuta cuando termina la lectura.
            reader.onload = () => {

                // Obtenemos el resultado como texto.
                const resultado = reader.result as string;

                // Quitamos la parte inicial de la Data URL.
                // Nos quedamos solamente con el contenido Base64.
                resolve(resultado.split(",")[1]);
            };

            // Si ocurre un error, rechazamos la Promise.
            reader.onerror = () => reject(reader.error);

        });
    }
}
