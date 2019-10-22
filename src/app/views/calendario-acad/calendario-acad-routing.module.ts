import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioAcadComponent } from './calendario-acad.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { EventosFormComponent } from './components/eventos-form/eventos-form.component';
import { FormComponent } from '../../components/detalle-calendario/form.component';


const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  {
    path: '', component: CalendarioAcadComponent,
    children: [
      { path: 'lista', component: CalendarioComponent },
      { path: 'eventos', component: EventosListComponent },
      { path: 'evento-add', component: EventosFormComponent },
      { path: 'evento-edit/:id', component: EventosFormComponent },
      { path: 'detalle-add/:idCalendario', component: FormComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioAcadRoutingModule { }
