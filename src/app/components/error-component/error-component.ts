// Importamos Component.
import { Component } from '@angular/core';

// Decorador del componente.
@Component({
    selector: 'app-error-component',

    // No es standalone.
    standalone: false,

    // Archivo HTML.
    templateUrl: './error-component.html',

    // Archivo CSS.
    styleUrl: './error-component.css',
})

// Clase del componente.
export class ErrorComponent {}
