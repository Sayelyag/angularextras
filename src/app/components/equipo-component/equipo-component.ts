// ChangeDetectorRef permite actualizar manualmente la vista.
// Component permite crear un componente.
// OnInit permite ejecutar código cuando se inicia el componente.
import {
    ChangeDetectorRef,
    Component,
    OnInit
} from '@angular/core';

// Importamos el modelo Equipo.
import { Equipo } from '../../models/equipos';

// Importamos el servicio de equipos.
import { ServiceEquipos } from '../../services/service.equipos';


// Decorador que identifica el componente.
@Component({
    selector: 'app-equipo-component',

    // Indicamos que no es un componente standalone.
    standalone: false,

    // Conectamos el HTML.
    templateUrl: './equipo-component.html',

    // Conectamos el CSS.
    styleUrl: './equipo-component.css',
})


// Creamos la clase e implementamos OnInit.
export class EquipoComponent implements OnInit {

    // Variable pública que contiene un array de equipos.
    // El ! indica que se inicializará más adelante.
    public equipos!: Array<Equipo>;


    // Inyectamos los servicios que necesitamos.
    constructor(

        // Servicio para obtener los equipos.
        private _service: ServiceEquipos,

        // Servicio para actualizar la vista.
        private _cdr: ChangeDetectorRef

    ) {}


    // Método que se ejecuta al iniciar el componente.
    async ngOnInit(): Promise<void> {

        // Llamamos al servicio y esperamos la respuesta.
        this.equipos = await this._service.getEquipos();

        // Forzamos la actualización de la vista.
        this._cdr.detectChanges();

    }
}
