import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HeaderComponent } from "./components/header/header.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "inicio" },
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: HeaderComponent,
    children: [
      {
        path: "dash",
        loadChildren: () => import("./views/dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "fichas",
        loadChildren: () => import("./components/fichas-dashboard/fichas-dashboard.module").then(m => m.FichasDashboardModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('./views/calendario-acad/calendario-acad.module').then(m => m.CalendarioAcadModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
