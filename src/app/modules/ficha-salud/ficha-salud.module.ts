import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichaSaludRoutingModule } from './ficha-salud-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SeccionComponent,
    PreguntaComponent
  ],
  imports: [
    CommonModule,
    FichaSaludRoutingModule
  ]
})
export class FichaSaludModule { }
