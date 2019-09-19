import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFichaSaludComponent } from './salud/components/layout-ficha-salud/layout-ficha-salud.component';
import { FichasComponent } from './fichas.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'salud', component: LayoutFichaSaludComponent },
      { path: '', component: FichasComponent },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichasRoutingModule { }
