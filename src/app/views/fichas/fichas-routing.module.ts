import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichasComponent } from './fichas.component';
import { SaludComponent } from './pages/salud/salud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



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
export class FichasRoutingModule { }
