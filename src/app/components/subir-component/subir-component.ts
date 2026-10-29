import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'app-subir-component',
  standalone: false,
  templateUrl: './subir-component.html',
  styleUrl: './subir-component.css',
})
export class SubirComponent {
  @ViewChild('imagenInput') imagenInput! : ElementRef;
  public imagen!: File;
  constructor(
    private _service : Service
  ){}
  async seleccionarImagen(): Promise<void> {
    const seleccionada = this.imagenInput.nativeElement;
    //console.log(seleccionada)

    if(seleccionada.files){
      this.imagen = seleccionada.files[0];
      console.log(this.imagen)
      await this._service.subirFoto(this.imagen)
    }
  }
}
