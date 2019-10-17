import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FichasComponent} from './fichas.component';
import {SaludComponent} from './salud/salud.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '', component: FichasComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'salud', component: SaludComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichasRoutingModule {
}
