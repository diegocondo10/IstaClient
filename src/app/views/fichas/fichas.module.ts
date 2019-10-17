import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {FichasComponent} from './fichas.component';
import {FichasRoutingModule} from './fichas-routing.module';
import {SaludComponent} from './salud/salud.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PreguntaComponent} from './salud/pregunta/pregunta.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    FichasComponent,
    SaludComponent,
    DashboardComponent,
    PreguntaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FichasRoutingModule,
    SharedModule
  ]
})
export class FichasModule {
}
