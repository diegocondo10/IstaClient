import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FichasComponent } from './fichas.component';
import { FichaSaludComponent } from './salud/ficha-salud/ficha-salud.component';


const routes: Routes = [
  {
    path: '', data: { title: 'Fichas' },
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: FichasComponent },
      { path: 'salud', component: FichaSaludComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichasRoutingModule { }
