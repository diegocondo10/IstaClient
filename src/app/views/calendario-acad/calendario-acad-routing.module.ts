import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioAcadComponent } from './calendario-acad.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EventosListComponent } from './components/eventos-list/eventos-list.component';
import { EventosFormComponent } from './components/eventos-form/eventos-form.component';
import { FormComponent } from '../../components/detalle-calendario/form.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { DetalleCalendarioComponent } from 'src/app/components/detalle-calendario/detalle-calendario.component';
import { DashComponentsComponent } from 'src/app/components/dash-components/dash-components.component';


const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  {
    path: '', component: CalendarioAcadComponent,
    children: [
      { path: 'dash', component: DashComponentsComponent },
      { path: 'lista/:idPeriodo', component: CalendarioComponent },
      { path: 'eventos', component: EventosListComponent },
      { path: 'evento-add', component: EventosFormComponent },
      { path: 'evento-edit/:id', component: EventosFormComponent },
      { path: 'detalle-list', component: DetalleCalendarioComponent },
      { path: 'detalle-add', component: FormComponent },
      { path: 'detalle-edit/:id', component: FormComponent },
      { path: 'reporte', component: ReporteComponent },
      { path: 'detalle-add/:idCalendario', component: FormComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioAcadRoutingModule { }
