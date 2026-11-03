// Importamos ChangeDetectorRef.
// Component permite crear el componente.
// ElementRef permite acceder al input HTML.
// ViewChild permite seleccionar elementos del HTML.
import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';

// Importamos el servicio para subir imágenes.
import { Service } from '../../services/service';

// Importamos el modelo del archivo.
import { FileModel } from '../../models/filemodel';


// Decorador del componente.
@Component({
    selector: 'app-subir-component',
    standalone: false,
    templateUrl: './subir-component.html',
    styleUrl: './subir-component.css',
})

export class SubirComponent {

    // Accedemos al input de tipo file del HTML.
    @ViewChild('imagenInput')
    imagenInput!: ElementRef;


    // Variable para guardar la imagen seleccionada.
    public imagen!: File;

    // Variable para guardar una URL de archivo si fuera necesaria.
    public urlFile!: string;


    // Inyectamos los servicios.
    constructor(

        // Servicio para enviar la imagen.
        private _service: Service,

        // Permite actualizar la vista.
        private _cdr: ChangeDetectorRef

    ) {}


    // -----------------------------------------
    // MÉTODO 1: SELECCIONAR IMAGEN
    // -----------------------------------------

    // Método para recuperar la imagen seleccionada.
    async seleccionarImagen(): Promise<void> {

        // Obtenemos el primer archivo del input.
        const img = this.imagenInput.nativeElement.files[0];

        // Enviamos la imagen utilizando el servicio.
        await this._service.subirFoto(img);

    }


    // -----------------------------------------
    // MÉTODO 2: SUBIR IMAGEN
    // -----------------------------------------

    subir(): void {

        // Mostramos un mensaje en la consola.
        console.log("holaaa");

        // Recuperamos el archivo seleccionado.
        let file: File = this.imagenInput.nativeElement.files[0];

        // Comprobamos que se haya seleccionado una imagen.
        if (!file) {
            console.log("Selecciona una imagen");
            return;
        }

        // Obtenemos el nombre real del archivo.
        let fileName = file.name;

        // Creamos un lector de archivos.
        let reader = new FileReader();

        // Se ejecuta cuando termina de leer el archivo.
        reader.onloadend = () => {

            // Creamos una variable para guardar el contenido binario.
            let buffer: ArrayBuffer;

            // Convertimos el resultado en ArrayBuffer.
            buffer = reader.result as ArrayBuffer;

            // Variable donde guardaremos el Base64.
            let base64: string;

            // Convertimos el ArrayBuffer en una cadena Base64.
            base64 = btoa(
                new Uint8Array(buffer).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            );

            // Creamos un objeto FileModel.
            let fileModel = new FileModel(fileName, base64);

            // Enviamos el archivo al servidor mediante POST.
            this._service.postFoto(fileModel).subscribe((response) => {

                // Mostramos la respuesta.
                console.log(response);

            });

        };

        // Leemos el archivo como ArrayBuffer.
        reader.readAsArrayBuffer(file);

    }

}
