// ChangeDetectorRef: permite actualizar la vista.
// Component: permite crear un componente.
// ElementRef: permite acceder a elementos HTML.
// ViewChild: permite seleccionar elementos del HTML.
import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';

// Importamos el servicio de empleados.
import { ServiceEmpleados } from '../../services/service.empleados';

// Router permite navegar entre páginas.
import { Router } from '@angular/router';

// Importamos el modelo de credenciales.
import { Credencial } from '../../models/credencial';


// Decorador del componente.
@Component({
    selector: 'app-login-component',
    standalone: false,
    styleUrl: './login-component.css',
    templateUrl: './login-component.html',
})

export class LoginComponent {

    // Accedemos al input del nombre mediante su referencia HTML.
    @ViewChild("cajanombre")
    cajaNombre!: ElementRef;

    // Accedemos al input de contraseña.
    @ViewChild("cajacontrasenia")
    cajacontrasenia!: ElementRef;


    // Inyectamos los servicios necesarios.
    constructor(

        // Permite detectar cambios.
        private _cdr: ChangeDetectorRef,

        // Servicio para iniciar sesión.
        private _service: ServiceEmpleados,

        // Servicio para navegar.
        private _router: Router,

    ) {}


    // Método asíncrono para iniciar sesión.
    async login(): Promise<void> {

        // Recuperamos el valor del input del nombre.
        let nombre = this.cajaNombre.nativeElement.value;

        // Recuperamos el valor de la contraseña.
        let pwd = this.cajacontrasenia.nativeElement.value;

        // Creamos un objeto Credencial.
        let credenciales = new Credencial(nombre, pwd);

        // Enviamos las credenciales al servicio.
        // Esperamos la respuesta del servidor.
        let response = await this._service.postLogin(credenciales);

        // Mostramos la respuesta en la consola.
        console.log(response);

        // Guardamos el token recibido en sessionStorage.
        sessionStorage.setItem("TOKEN", response.response);

        // Navegamos a la página principal.
        this._router.navigate(["/"]);

    }

}
