import { Component} from '@angular/core';
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor( private _ps:ProductosService) { }



}
