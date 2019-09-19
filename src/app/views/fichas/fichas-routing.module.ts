import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFichaSaludComponent } from './salud/components/layout-ficha-salud/layout-ficha-salud.component';
import { FichasComponent } from './fichas.component';
import { ConfirmacionComponent } from './salud/components/confirmacion/confirmacion.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'salud', component: LayoutFichaSaludComponent },
      { path: '', component: FichasComponent },
      { path: 'confirmar', component: ConfirmacionComponent },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichasRoutingModule { }
