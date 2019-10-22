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


@NgModule({
  declarations: [
    CalendarioAcadComponent,
    CalendarioComponent,
    NavBarComponent,
    EventosListComponent,
    EventosFormComponent,
    DetalleCalendarioComponent,
    FormComponent,
    ReporteComponent
  ],
  imports: [
    CommonModule,
    CalendarioAcadRoutingModule,
    FullCalendarModule,
    FormsModule,
  ]
})
export class CalendarioAcadModule { }