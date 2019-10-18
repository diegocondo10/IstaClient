import { Component, OnInit } from "@angular/core";
import { FichaSaludService } from "./services/ficha-salud.service";
import { UsersService } from "../../services/users.service";
import { SeccionFs, PreguntaFs, ParametroFs } from '../fichas-dashboard/models/appFichas';

@Component({
  selector: "app-ficha-salud",
  templateUrl: "./ficha-salud.component.html",
  styleUrls: ["./ficha-salud.component.css"]
})
export class FichaSaludComponent implements OnInit {
  public ficha: SeccionFs[];

  constructor(private srv: FichaSaludService, private userSrv: UsersService) { }

  async ngOnInit() {
    this.ficha = await this.srv.buscarFichaSalud(this.userSrv.getUserLoggedIn().persona.id);
  }

  /*
   * FUNCIONES DE CALLBACKS Y PROCESOS QUE SE REPITEN
   * */

  private filterParam = (item, event): boolean => item.id === event.value;


  generarJSONparametros(result): string {
    return JSON.stringify(result)
      .replace(/,"__typename":"ParametroFsType"/g, "")
      .replace(/,"check":true/g, "");
  }

  /*
   *   EVENTOS DEL TEMPLATE
   * */
  check(pregunta: PreguntaFs, parametro: ParametroFs, event) {
    parametro.check = event.checked;

    const result = pregunta.parametros.filter(params => params.check);

    let json = null;
    if (result.length > 0) {
      json = '{"parametros":';
      json += this.generarJSONparametros(result);
      json += "}";
    }

    this.srv.updateRespuestaFs(pregunta.respuestaPersona.id, json);
  }

  select(pregunta: PreguntaFs, event) {
    const result = pregunta.parametros.filter(param => param.id === event.value)[0];

    let json = '{"parametro":';
    json += this.generarJSONparametros(result);
    json += "}";

    console.log(json);

    this.srv.updateRespuestaFs(pregunta.respuestaPersona.id, json);
  }

  simple(event) {
    console.log(event.value);
  }
}
