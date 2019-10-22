import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarioAcadRoutingModule } from './calendario-acad-routing.module';
import { CalendarioAcadComponent } from './calendario-acad.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { EventosFormComponent } from './components/eventos-form/eventos-form.component';
import { FormsModule } from '@angular/forms';
import { DetalleCalendarioComponent } from '../../components/detalle-calendario/detalle-calendario.component';
import { FormComponent } from '../../components/detalle-calendario/form.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { DashComponentsComponent } from '../../components/dash-components/dash-components.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CalendarioAcadComponent,
    CalendarioComponent,
    NavBarComponent,
    EventosListComponent,
    EventosFormComponent,
    DetalleCalendarioComponent,
    FormComponent,
    ReporteComponent,
    DashComponentsComponent
  ],
  imports: [
    CommonModule,
    CalendarioAcadRoutingModule,
    FullCalendarModule,
    FormsModule,
    SharedModule
  ]
})
export class CalendarioAcadModule { }
