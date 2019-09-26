import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioAcadComponent } from './calendario-acad.component';


const routes: Routes = [
  { path: '', component: CalendarioAcadComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioAcadRoutingModule { }
