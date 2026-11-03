// Importamos Component.
import { Component } from '@angular/core';

// Importamos jsPDF para crear documentos PDF.
import jsPDF from 'jspdf';

// Importamos autoTable para crear tablas dentro del PDF.
import autoTable from 'jspdf-autotable';


// Decorador del componente.
@Component({
    selector: 'app-pdf-component',
    standalone: false,
    templateUrl: './pdf-component.html',
    styleUrl: './pdf-component.css',
})

export class PdfComponent {


    // Método que genera el documento.
    generarDocumento(): void {

        // Creamos un documento PDF nuevo.
        let documento: jsPDF = new jsPDF();

        // Establecemos el tamaño de letra.
        documento.setFontSize(18);

        // Escribimos un texto en el PDF.
        // 10 = posición horizontal.
        // 10 = posición vertical.
        documento.text("Mi documento", 10, 10);


        // Creamos los encabezados de la tabla.
        const headers = [
            ["Nombre", "Email", "Edad"]
        ];

        // Creamos los datos de la tabla.
        const data = [
            ["Diana", "diana@gmail.com", 44],
            ["Mari", "mari@gmail.com", 20],
            ["Patricia", "patricia@gmail.com", 80],
        ];


        // Insertamos la tabla en el documento.
        autoTable(documento, {

            // Encabezados.
            head: headers,

            // Filas.
            body: data,

            // Posición vertical inicial.
            startY: 20

        });


        // Descargamos el PDF.
        documento.save("personas.pdf");

    }

}
