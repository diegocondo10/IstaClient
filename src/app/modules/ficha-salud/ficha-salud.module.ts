import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichaSaludRoutingModule } from './ficha-salud-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { ParametrosPersonaComponent } from './components/parametros-persona/parametros-persona.component';
import { FichaPipe } from './pipes/ficha.pipe';
import { DiagnosticoFamiliarComponent } from './components/diagnostico-familiar/diagnostico-familiar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    SeccionComponent,
    PreguntaComponent,
    ParametrosPersonaComponent,
    FichaPipe,
    DiagnosticoFamiliarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FichaSaludRoutingModule
  ]
})
export class FichaSaludModule { }
