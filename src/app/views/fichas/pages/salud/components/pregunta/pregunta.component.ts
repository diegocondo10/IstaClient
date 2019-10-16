import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PreguntaFs, RespuestaSimple, RespuestaParametros, RespuestaDiagnosticos, ParametroFs, RespuestaJSON } from '../../../../../../models/appFichas';
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

  public JSONstring: string

  public respuesta: RespuestaJSON = {
    parametro: {},
    parametros: new Map<number, ParametroFs>()
  }


  constructor(
    private srv: SaludService
  ) { }

  ngOnInit() {
    this.verificarPreguntas()

  }

  generarRespuestaParams(event) {
    const params = this.respuesta.parametros

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

  async select(event) {
    const result = this.pregunta.parametros.filter(item => item.id == event.value)[0]

    let json = '{"parametro":'
    json += JSON.stringify(result).replace(/,"__typename":"ParametroFsType"/g, "")
    json += '}'
    await this.srv.updateRespuestaFs(this.pregunta.respuestaPersona.id, json)

  }

  async simple(event) {
    console.log(event.value);
  }

  verificarPreguntas() {
    this.JSONstring = this.pregunta.respuestaPersona.respuestas

    if (this.JSONstring) {

      const res = JSON.parse(this.JSONstring)

      if (res['parametro']) {
        this.respuesta.parametro = res['parametro']

      } else if (res['parametros']) {

        const parametros = res['parametros'] as ParametroFs[]
        parametros.forEach(obj => {
          const param = this.pregunta.parametros.filter(item => item.id == obj.id)[0]
          if (param) {
            param.check = true
            this.respuesta.parametros.set(obj.id, obj)
          }
        });

      } else if (res['diagnosticos']) {
        this.respuesta.diagnosticos = res['diagnosticos']

      }

    }
  }


}
