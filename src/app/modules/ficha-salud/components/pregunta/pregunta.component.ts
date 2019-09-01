import { Component, OnInit, Input, Host } from '@angular/core';
import { Parametro } from '../../../../models/parametro';
import { DetalleRespuesta } from '../../../../models/detalle-respuesta';
import { DetalleRespuestaService } from '../../../../services/detalle-respuesta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public parametros: Parametro[];
  @Input() detalle: DetalleRespuesta

  constructor(
    private detallePrgSrv: DetalleRespuestaService

  ) { }

  async ngOnInit() {


  }



  check(parametro: Parametro) {
    console.log(parametro);
  }


  async respuesta(value, detalle: DetalleRespuesta) {
    this.detalle.respuesta = value
    await this.detallePrgSrv.updateResFS(this.detalle.id, value)
    console.log(detalle);
  }


}
