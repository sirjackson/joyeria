import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { IfStmt } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ProductosService {

  productos:any[]=[];
  cargando:boolean=true;

  constructor( private http:Http)  { 
    this.cargar_producto();
  }

  /**
   * cargar_producto
   */
  public cargar_producto() {

    this.cargando =true;

    this.http.get('https://rolex-76245.firebaseio.com/productos_idx.json')
      .subscribe( res=>{
          console.log( res.json());

          setTimeout(()=>{
            this.cargando = false;
            this.productos = res.json();
          },1500)

      })

  }

}
