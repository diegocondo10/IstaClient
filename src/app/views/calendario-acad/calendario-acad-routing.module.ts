import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioAcadComponent } from './calendario-acad.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { EventosFormComponent } from './components/eventos-form/eventos-form.component';
import { DetalleCalendarioComponent } from '../../components/detalle-calendario/detalle-calendario.component';
import { FormComponent } from '../../components/detalle-calendario/form.component';


const routes: Routes = [
  { path: '', redirectTo: 'calendario', pathMatch: 'full' },
  {
    path: '', component: CalendarioAcadComponent,
    children: [
      { path: 'calendario', component: CalendarioComponent },
      { path: 'eventos', component: EventosListComponent },
      { path: 'evento-add', component: EventosFormComponent },
      { path: 'evento-edit/:id', component: EventosFormComponent },
      { path: 'detalle-list', component: DetalleCalendarioComponent },
      { path: 'detalle-add', component: FormComponent },
      { path: 'detalle-edit/:id', component: FormComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioAcadRoutingModule { }
