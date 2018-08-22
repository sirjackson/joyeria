import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";

//Rutas
import { appRouting } from "./app.routes";

//Servicios
import { InformacionService } from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AnillosComponent } from './components/portafolio/anillos/anillos.component';
import { CadenasComponent } from './components/portafolio/cadenas/cadenas.component';
import { PendientesComponent } from './components/portafolio/pendientes/pendientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AnillosComponent,
    CadenasComponent,
    PendientesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
