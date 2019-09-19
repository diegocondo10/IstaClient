import { Component, OnInit, Input } from '@angular/core';
import { Parametro } from '../../../../../models/parametro';
import { DetalleRespuesta } from '../../../../../models/detalle-respuesta';
import { DetalleRespuestaService } from '../../../services/detalle-respuesta.service';
import { DetalleParametrosService } from '../../../services/detalle-parametros.service';
import { DetalleParametro } from '../../../../../models/detalle-parametros';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public parametros: Parametro[];
  @Input() detalle: DetalleRespuesta

  constructor(
    private detPrgSrv: DetalleRespuestaService,
    private detParamSrv: DetalleParametrosService

  ) { }

  async ngOnInit() {
    this.parametros = this.detalle.detalleparametrosSet
    this.parametros.forEach(obj => this.changeState(obj))
  }

  private changeState(detalle: DetalleParametro) {

    const result: Parametro = this.detalle.pregunta.tipoRespuesta.parametroSet
      .filter((item: Parametro) => item.id == detalle.parametro.id)[0]

    if (result != null) {
      result.checked = true
    }

  }



  async check(checked, parametro: Parametro) {
    parametro.checked = checked
    await this.detParamSrv.addDelParam(this.detalle.id, parametro.id)
  }


  async respuesta(value, detalle: DetalleRespuesta) {
    this.detalle.respuesta = value
    await this.detPrgSrv.updateResFS(this.detalle.id, value)
    console.log(detalle);
  }


}
