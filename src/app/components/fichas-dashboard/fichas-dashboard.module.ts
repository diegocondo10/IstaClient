import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FichasDashboardRoutingModule} from './fichas-dashboard-routing.module';
import {FichasDashboardComponent} from './fichas-dashboard.component';
import {FichaSaludComponent} from '../ficha-salud/ficha-salud.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {ConfirmarFichaComponent} from '../confirmar-ficha/confirmar-ficha.component';

@NgModule({
  declarations: [FichasDashboardComponent, FichaSaludComponent, ConfirmarFichaComponent],
  imports: [
    CommonModule,
    FormsModule,
    FichasDashboardRoutingModule,
    SharedModule
  ]
})
export class FichasDashboardModule {
}
