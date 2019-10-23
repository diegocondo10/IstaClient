import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FichasDashboardComponent} from './fichas-dashboard.component';
import {FichaSaludComponent} from '../ficha-salud/ficha-salud.component';

const routes: Routes = [
  {
    path: '',
    component: FichasDashboardComponent
  },
  {
    path: 'salud',
    component: FichaSaludComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichasDashboardRoutingModule {
}
