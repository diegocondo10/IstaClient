import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ParametroFs, PreguntaFs, RespuestaJSON} from '../../../../../../models/appFichas';
import {SaludService} from '../../services/salud.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input() public pregunta: PreguntaFs;
  @Input() form: FormGroup;

  public formControl: FormControl;
  public resTemplate: RespuestaJSON = {
    parametro: {},
    parametros: new Map<number, ParametroFs>()
  };
  public res: RespuestaJSON;


  constructor(
    private srv: SaludService
  ) {
  }

  ngOnInit() {
    this.verificarPreguntas();
  }

  verificarPreguntas(): void {
    const JSONstring = this.pregunta.respuestaPersona.respuestas;

    if (JSONstring) {
      this.res = JSON.parse(JSONstring);

      if (this.res.parametro) {

        this.resTemplate.parametro = this.res.parametro;

      } else if (this.res.parametros) {

        this.res.parametros.forEach(obj => this.checkParams(obj));

      } else if (this.res.diagnosticos) {

        this.resTemplate.diagnosticos = this.res.diagnosticos;

      }
    }

  }

  /*
  * FUNCIONES DE CALLBACKS Y PROCESOS QUE SE REPITEN
  * */

  filterParam = (item, event): boolean => item.id === event.value;

  checkParams(obj: ParametroFs): void {
    const
      param = this.pregunta.parametros.filter(item => item.id === obj.id)[0];

    if (param) {
      param.check = true;
      this.resTemplate.parametros.set(obj.id, obj);
    }
  }

  generarJSONparametros(result): string {
    return JSON.stringify(result).replace(/,"__typename":"ParametroFsType"/g, '');
  }


  /*
  *   EVENTOS DEL TEMPLATE
  * */
  async check(event) {
    const params = this.resTemplate.parametros;

    if (!params.delete(event.value)) {

      const paramPreg = this.pregunta.parametros
        .filter((item) => this.filterParam(item, event))[0];

      params.set(paramPreg.id, paramPreg);

    }

    const result = [...params.values()];

    let json = null;
    if (result.length > 0) {
      json = '{"parametros":';
      json += this.generarJSONparametros(result);
      json += '}';
    }
    await this.srv.updateRespuestaFs(this.pregunta.respuestaPersona.id, json);

  }

  async select(event) {
    const result = this.pregunta.parametros
      .filter(item => this.filterParam(item, event))[0];

    let json = '{"parametro":';
    json += this.generarJSONparametros(result);
    json += '}';

    await this.srv.updateRespuestaFs(this.pregunta.respuestaPersona.id, json);
  }

  async simple(event) {
    console.log(event.value);
  }
}
