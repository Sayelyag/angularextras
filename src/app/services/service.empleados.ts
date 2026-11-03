// HttpClient: permite realizar peticiones HTTP.
// HttpHeaders: permite configurar las cabeceras.
// HttpContext: permite enviar información adicional en la petición.
import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
// Injectable: permite utilizar esta clase como servicio de Angular.
import { Injectable } from "@angular/core";
// firstValueFrom: convierte un Observable en una Promise.
import { firstValueFrom } from "rxjs";
// Importamos la URL de nuestro servidor.
import { environment } from "../../environments/environment.development";
// Importamos nuestros modelos.
import { Credencial } from "../models/credencial";
import { Empleado } from "../models/empleado";
// Importamos el contexto que controla si se envía el token.
import { SKIP_TOKEN } from "../utils/token.context";

// Indicamos que esta clase será un servicio.
@Injectable()

export class ServiceEmpleados {

    // Guardamos la URL de la API de empleados.
    url = environment.urlEmpleados;

    // Inyectamos HttpClient mediante el constructor.
    constructor(
        private _http: HttpClient
    ) {}


    // -----------------------------------------
    // MÉTODO 1: INICIAR SESIÓN
    // -----------------------------------------

    // Recibe unas credenciales y devuelve una Promise.
    async postLogin(credenciales: Credencial): Promise<any> {

        // Endpoint al que vamos a enviar la petición.
        let endpoint = "auth/login";

        // Convertimos el objeto de credenciales a JSON.
        let json = JSON.stringify(credenciales);

        // Indicamos que estamos enviando JSON.
        let header = new HttpHeaders()
            .set("content-type", "application/json");

        // Realizamos una petición POST.
        return firstValueFrom(
            this._http.post(
                this.url + endpoint,
                json,
                {
                    headers: header,

                    // Evitamos enviar un token al iniciar sesión.
                    context: new HttpContext().set(SKIP_TOKEN, true)
                }
            )
        );
    }


    // -----------------------------------------
    // MÉTODO 2: OBTENER PERFIL
    // -----------------------------------------

    // Devuelve los datos de un empleado.
    async obtenerPerfil(): Promise<Empleado> {

        // Recuperamos el token almacenado en sessionStorage.
        const token = sessionStorage.getItem("TOKEN");

        // Creamos una cabecera con el token.
        let header = new HttpHeaders()
            .set("authorization", "bearer " + token);

        // Endpoint para obtener el perfil.
        let endpoint = "api/Empleados/PerfilEmpleado";

        // Realizamos una petición GET.
        return firstValueFrom(
            this._http.get<Empleado>(
                this.url + endpoint,
                { headers: header }
            )
        );
    }


    // -----------------------------------------
    // MÉTODO 3: OBTENER SUBORDINADOS
    // -----------------------------------------

    // Devuelve un array de empleados.
    async obtenerSubordinados(): Promise<Empleado[]> {

        // Endpoint para consultar los subordinados.
        let endpoint = "api/Empleados/subordinados";

        // Realizamos una petición GET.
        return firstValueFrom(
            this._http.get<Empleado[]>(
                this.url + endpoint
            )
        );
    }

}
