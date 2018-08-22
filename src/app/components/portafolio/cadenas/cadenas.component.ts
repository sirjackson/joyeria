import { Component, OnInit } from '@angular/core';
import { ProductosService } from "../../../services/productos.service";

@Component({
  selector: 'app-cadenas',
  templateUrl: './cadenas.component.html',
  styles: []
})
export class CadenasComponent {

  constructor( private _ps:ProductosService ) { }



}
