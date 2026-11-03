// HttpErrorResponse representa un error HTTP.
// HttpInterceptorFn permite crear un interceptor funcional.
import {
    HttpErrorResponse,
    HttpInterceptorFn
} from "@angular/common/http";

// inject permite obtener servicios de Angular.
// Injector permite obtener servicios dinámicamente.
import {
    inject,
    Injector
} from "@angular/core";

// catchError permite capturar errores de un Observable.
// throwError permite devolver el error.
import {
    catchError,
    throwError
} from "rxjs";

// Servicio para mostrar notificaciones.
import { ToastrService } from "ngx-toastr";

// Servicio para navegar entre rutas.
import { Router } from "@angular/router";


// Creamos el interceptor de errores.
export const errorInterceptor: HttpInterceptorFn = (req, next) => {

    // Inyectamos el Router.
    const _router = inject(Router);

    // Creamos un Injector.
    const injector = inject(Injector);

    // Enviamos la petición.
    // pipe permite añadir operadores RxJS.
    return next(req).pipe(

        // Capturamos los errores.
        catchError((error: HttpErrorResponse) => {

            // Obtenemos el servicio de notificaciones.
            const toastService = injector.get(ToastrService);

            // Mostramos una notificación de error.
            toastService.error(error.message, "Error");

            // Redirigimos a la página de error.
            _router.navigate(["/error"]);

            // Mostramos información en la consola.
            console.log("tipo de error: " + error.status);
            console.log("mensaje: " + error.message);

            // Devolvemos el error para que no se pierda.
            return throwError(() => error);

        })

    );
};
