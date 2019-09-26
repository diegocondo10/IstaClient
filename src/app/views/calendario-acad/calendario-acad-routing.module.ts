import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioAcadComponent } from './calendario-acad.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { EventosFormComponent } from './components/eventos-form/eventos-form.component';


const routes: Routes = [
  { path: '', component: CalendarioAcadComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'eventos', component: EventosListComponent },
  { path: 'evento-add', component: EventosFormComponent },
  { path: 'evento-edit/:id', component: EventosFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioAcadRoutingModule { }
