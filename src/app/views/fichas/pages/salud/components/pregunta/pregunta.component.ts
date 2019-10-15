import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PreguntaFs, RespuestaSimple, RespuestaParametros, RespuestaDiagnosticos, RespuestaFs, ParametroFs } from '../../../../../../models/appFichas';
import { SaludService } from '../../services/salud.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input() public pregunta: PreguntaFs
  @Input() form: FormGroup

  public formControl: FormControl

  public respuestaJson: string

  public respuestSimple: RespuestaSimple = {}

  public respuestaParams: RespuestaParametros = {
    parametros: new Map<number, ParametroFs>()
  }

  public respuestaDiagnos: RespuestaDiagnosticos = {
    diagnosticos: []
  }

  constructor(
    private srv: SaludService
  ) { }

  ngOnInit() {


  }

  generarRespuestaParams(event) {
    const params = this.respuestaParams.parametros

    if (params.get(event.value)) {
      params.delete(event.value)

    } else {

      const paramPreg = this.pregunta.parametros.filter(item => item.id == event.value)[0]
      params.set(paramPreg.id, paramPreg)

    }

    return [...params.values()]
  }

  async check(event) {
    const result = this.generarRespuestaParams(event)

    let json = null
    if (result.length > 0) {
      json = '{"parametros":'
      json += JSON.stringify(result).replace(/,"__typename":"ParametroFsType"/g, "")
      json += '}'
    }
    await this.srv.updateRespuestaFs(this.pregunta.respuestaPersona.id, json)

  }

  select(event) {

    const respuesta = this.pregunta.parametros.filter(item => item.id == event.vallue)[0]
    console.log(respuesta);
  }

  verificarPreguntas() {

    this.respuestaJson = this.pregunta.respuestaPersona.respuestas
    if (this.respuestaJson) {

      const res = JSON.parse(this.respuestaJson)

      if (res['respuesta']) {

        this.respuestSimple.respuesta = res['respuesta']

      } else if (res['parametros']) {

        const parametros = res['parametros'] as ParametroFs[]

        parametros.forEach(obj => {

          const param = this.pregunta.parametros.filter(item => item.id == obj.id)[0]
          if (param) {
            param.check = true
            this.respuestaParams.parametros.set(obj.id, obj)
          }
        });

      } else if (res['diagnosticos']) {
        this.respuestaDiagnos = res['diagnosticos']
      }

    }
  }


}
