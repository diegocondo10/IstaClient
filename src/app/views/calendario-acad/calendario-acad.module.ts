import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioAcadRoutingModule } from './calendario-acad-routing.module';
import { CalendarioAcadComponent } from './calendario-acad.component';


@NgModule({
  declarations: [CalendarioAcadComponent],
  imports: [
    CommonModule,
    CalendarioAcadRoutingModule
  ]
})
export class CalendarioAcadModule { }
