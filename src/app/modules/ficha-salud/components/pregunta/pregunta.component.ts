import { Component, OnInit, Input, Host } from '@angular/core';
import { DetallePreguntas } from '../../../../models/detalle-preguntas';
import { Parametro } from '../../../../models/parametro';
import { ParametroService } from '../../../../services/parametro.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input() detalle: DetallePreguntas;
  public parametros: Parametro[];

  constructor(
    public paramSrv: ParametroService
  ) { }

  async ngOnInit() {
    if (this.detalle.pregunta.tipoRespuesta.id == 10) {
      const preguntaId = this.detalle.pregunta.id;
      if (preguntaId == 34) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(1)
      }




    }


  }

}
