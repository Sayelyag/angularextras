// Importamos ChangeDetectorRef para actualizar la vista.
// Component para crear el componente.
// OnInit para ejecutar código al iniciar.
import {
    ChangeDetectorRef,
    Component,
    OnInit
} from '@angular/core';

// Importamos el modelo Empleado.
import { Empleado } from '../../models/empleado';

// Importamos el servicio de empleados.
import { ServiceEmpleados } from '../../services/service.empleados';

// Importamos Router para navegar.
import { Router } from '@angular/router';


// Decorador del componente.
@Component({
    selector: 'app-subordinados-component',
    standalone: false,
    styleUrl: './subordinados-component.css',
    templateUrl: './subordinados-component.html',
})


// Implementamos OnInit.
export class SubordinadosComponent implements OnInit {

    // Array donde guardaremos los subordinados.
    public subordinados!: Array<Empleado>;

    // Recuperamos el token del navegador.
    public token = sessionStorage.getItem("TOKEN");


    // Inyectamos los servicios.
    constructor(

        // Permite actualizar la vista.
        private _cdr: ChangeDetectorRef,

        // Servicio de empleados.
        private _service: ServiceEmpleados,

        // Servicio de navegación.
        private _router: Router

    ) {}


    // Método para navegar al login.
    mandaralogin() {

        this._router.navigate(["/"]);

    }


    // Método que se ejecuta al iniciar.
    async ngOnInit(): Promise<void> {

        // Llamamos al servicio para obtener subordinados.
        this.subordinados = await this._service.obtenerSubordinados();

        // Actualizamos la vista.
        this._cdr.detectChanges();

    }

}
