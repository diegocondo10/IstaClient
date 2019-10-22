import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FichasDashboardRoutingModule } from "./fichas-dashboard-routing.module";
import { FichasDashboardComponent } from "./fichas-dashboard.component";
import { FichaSaludComponent } from "../ficha-salud/ficha-salud.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FichasDashboardComponent, FichaSaludComponent],
  imports: [
    CommonModule,
    FormsModule,
    FichasDashboardRoutingModule
  ]
})
export class FichasDashboardModule { }
