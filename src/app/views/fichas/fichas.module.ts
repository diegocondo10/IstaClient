import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeccionComponent } from './salud/components/seccion/seccion.component';
import { PreguntaComponent } from './salud/components/pregunta/pregunta.component';
import { ParametrosPersonaComponent } from './salud/components/parametros-persona/parametros-persona.component';
import { DiagnosticoFamiliarComponent } from './salud/components/diagnostico-familiar/diagnostico-familiar.component';
import { ConfirmacionComponent } from './salud/components/confirmacion/confirmacion.component';
import { FichasComponent } from './fichas.component';
import { FichasRoutingModule } from './fichas-routing.module';
import { LayoutFichaSaludComponent } from './salud/components/layout-ficha-salud/layout-ficha-salud.component';




@NgModule({
  declarations: [
    SeccionComponent,
    PreguntaComponent,
    ParametrosPersonaComponent,
    DiagnosticoFamiliarComponent,
    ConfirmacionComponent,
    FichasComponent,
    LayoutFichaSaludComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    FichasRoutingModule
  ]
})
export class FichasModule { }
