// Importamos HttpInterceptorFn para crear un interceptor funcional.
import { HttpInterceptorFn } from "@angular/common/http";

// Importamos nuestra constante.
import { SKIP_TOKEN } from "../utils/token.context";


// Creamos el interceptor.
export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

    // Comprobamos si la petición tiene SKIP_TOKEN activado.
    if (req.context.get(SKIP_TOKEN)) {

        // Si está activado, enviamos la petición sin modificarla.
        return next(req);
    }

    // Recuperamos el token del sessionStorage.
    const token = sessionStorage.getItem("TOKEN");

    // Comprobamos si existe un token.
    if (token) {

        // Clonamos la petición original.
        // No podemos modificar directamente la petición.
        let peticion = req.clone({

            // Añadimos la cabecera Authorization.
            setHeaders: {
                Authorization: "bearer " + token
            }

        });

        // Enviamos la petición modificada.
        return next(peticion);
    }

    // Si no hay token, enviamos la petición original.
    return next(req);
};
