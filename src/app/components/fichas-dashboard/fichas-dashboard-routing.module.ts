import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FichasDashboardComponent} from './fichas-dashboard.component';
import {FichaSaludComponent} from '../ficha-salud/ficha-salud.component';
import {ConfirmarFichaComponent} from '../confirmar-ficha/confirmar-ficha.component';

const routes: Routes = [
  {
    path: '',
    component: FichasDashboardComponent
  },
  {
    path: 'salud',
    component: FichaSaludComponent
  },
  {
    path: 'confirmar',
    component: ConfirmarFichaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichasDashboardRoutingModule {
}
