import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';


const routes: Routes = [
  { path: 'ficha-salud', component: LayoutComponent },
  { path: 'ficha-confirm', component: ConfirmacionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FichaSaludRoutingModule { }
