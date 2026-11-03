// Importamos Component.
import { Component } from '@angular/core';

// Importamos Router para navegar.
import { Router } from '@angular/router';

// Decorador del componente.
@Component({
    selector: 'app-menu-component',
    standalone: false,
    templateUrl: './menu-component.html',
    styleUrl: './menu-component.css',
})

export class MenuComponent {

    // Inyectamos Router.
    constructor(
        private _router: Router
    ) {}


    // Método para cerrar sesión.
    logout(): void {

        // Eliminamos el token del almacenamiento.
        sessionStorage.removeItem("TOKEN");

        // Redirigimos al usuario al login.
        this._router.navigate(["/login"]);

    }

}
