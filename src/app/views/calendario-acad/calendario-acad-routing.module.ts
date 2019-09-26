import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioAcadComponent } from './calendario-acad.component';
import { CalendarioComponent } from './components/calendario/calendario.component';


const routes: Routes = [
  { path: '', component: CalendarioAcadComponent },
  { path: 'calendario', component: CalendarioComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioAcadRoutingModule { }
