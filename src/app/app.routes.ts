import { RouterModule, Routes } from '@angular/router';

// importando las paginas creadas
import { 
    AboutComponent,
    ContactComponent,
    PortafolioComponent,
    HomeComponent,
    AnillosComponent,
    PendientesComponent,
    CadenasComponent
 } from "./components/index.paginas";
import { patch } from 'webdriver-js-extender';
import { Component } from '@angular/core/src/metadata/directives';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'portafolio', component: PortafolioComponent,
      children:[
        {
          path: 'anillos',
          component: AnillosComponent,
        },
        {
            path: 'pendientes',
            component:PendientesComponent
        },
        {
            path: 'cadenas',
            component: CadenasComponent
        }
      ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes,{useHash:true});