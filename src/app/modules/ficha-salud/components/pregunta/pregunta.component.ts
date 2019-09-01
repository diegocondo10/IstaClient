import { Component, OnInit, Input, Host } from '@angular/core';
import { Parametro } from '../../../../models/parametro';
import { DetalleRespuesta } from '../../../../models/detalle-respuesta';
import { DetalleRespuestaService } from '../../services/detalle-respuesta.service';
import { DetalleParametro } from '../../../../models/detalle-parametros';
import { DetalleParametrosService } from '../../services/detalle-parametros.service';

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
    /*    try {
         const param = this.detalle.detalleparametrosSet
           .filter((item: DetalleParametro) => item.parametro.id == parametro.id)[0]
         console.log(param);
         if (param == undefined) {
           this.detalle.detalleparametrosSet.push(parametro)
         } else {
           const index = this.detalle.detalleparametrosSet.indexOf(param)
           this.detalle.detalleparametrosSet.splice(index, 1);
         }
   
       } catch (error) {
         this.detalle.detalleparametrosSet.push(parametro)
         //this.detalle.detalleparametrosSet.push(parametro)
       }
       console.log(this.detalle.detalleparametrosSet); */
  }


  async respuesta(value, detalle: DetalleRespuesta) {
    this.detalle.respuesta = value
    await this.detPrgSrv.updateResFS(this.detalle.id, value)
    console.log(detalle);
  }


}
