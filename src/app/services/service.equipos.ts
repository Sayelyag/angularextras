// Importamos las herramientas necesarias para las peticiones HTTP.
import { HttpClient, HttpContext } from "@angular/common/http";
// Permite registrar el servicio.
import { Injectable } from "@angular/core";
// Importamos el modelo Equipo.
import { Equipo } from "../models/equipos";
// Importamos la URL de la API.
import { environment } from "../../environments/environment.development";
// Convertimos Observable en Promise.
import { firstValueFrom } from "rxjs";
// Importamos el contexto para controlar el token.
import { SKIP_TOKEN } from "../utils/token.context";


// Indicamos que es un servicio.
@Injectable()

export class ServiceEquipos {

    // Inyectamos HttpClient.
    constructor(
        private _http: HttpClient
    ) {}


    // Método que obtiene todos los equipos.
    // Devuelve una Promise con un array de Equipo.
    async getEquipos(): Promise<Equipo[]> {

        // Endpoint de la API.
        let request = "api/equipos";

        // Construimos la URL completa.
        let url = environment.urlEquipos + request;

        // Hacemos una petición GET.
        return firstValueFrom(

            this._http.get<Equipo[]>(url, {

                // Indicamos que esta petición no necesita token.
                context: new HttpContext().set(SKIP_TOKEN, true)

            })

        );
    }
}
