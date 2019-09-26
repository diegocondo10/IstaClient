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


@NgModule({
  declarations: [CalendarioAcadComponent, CalendarioComponent, NavBarComponent, EventosListComponent, EventosFormComponent],
  imports: [
    CommonModule,
    CalendarioAcadRoutingModule,
    FullCalendarModule,
    FormsModule
  ]
})
export class CalendarioAcadModule { }
