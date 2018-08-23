import { Component } from '@angular/core';
import { ProductosService } from "../../../services/productos.service";

@Component({
  selector: 'app-anillos',
  templateUrl: './anillos.component.html',
  styles: []
})
export class AnillosComponent  {

  constructor(private _ps:ProductosService) { }

}
