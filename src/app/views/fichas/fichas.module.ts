import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichasRoutingModule } from './fichas-routing.module';
import { FichasComponent } from './fichas.component';
import { FichaSaludComponent } from './salud/ficha-salud/ficha-salud.component';
import { FormsModule } from '@angular/forms';
import { SeccionComponent } from './salud/ficha-salud/components/seccion/seccion.component';
import { PreguntaComponent } from './salud/ficha-salud/components/pregunta/pregunta.component';
import { ParametrosPersonaComponent } from './salud/ficha-salud/components/parametros-persona/parametros-persona.component';
import { ConfirmacionComponent } from './salud/ficha-salud/components/confirmacion/confirmacion.component';
import { DiagnosticoFamiliarComponent } from './salud/ficha-salud/components/diagnostico-familiar/diagnostico-familiar.component';


@NgModule({
  declarations: [
    FichasComponent,
    FichaSaludComponent,
    SeccionComponent,
    PreguntaComponent,
    ParametrosPersonaComponent,
    ConfirmacionComponent,
    DiagnosticoFamiliarComponent
  ],
  imports: [
    CommonModule,
    FichasRoutingModule,
    FormsModule
  ]
})
export class FichasModule { }
