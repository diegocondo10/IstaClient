import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarioAcadRoutingModule } from './calendario-acad-routing.module';
import { CalendarioAcadComponent } from './calendario-acad.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [CalendarioAcadComponent, CalendarioComponent, NavBarComponent],
  imports: [
    CommonModule,
    CalendarioAcadRoutingModule,
    FullCalendarModule
  ]
})
export class CalendarioAcadModule { }
