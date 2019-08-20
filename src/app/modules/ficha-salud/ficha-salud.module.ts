import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichaSaludRoutingModule } from './ficha-salud-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SeccionComponent } from './components/seccion/seccion.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SeccionComponent
  ],
  imports: [
    CommonModule,
    FichaSaludRoutingModule
  ]
})
export class FichaSaludModule { }
