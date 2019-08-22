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

  public navbarCollapsed = true

  constructor(
    public paramSrv: ParametroService
  ) { }

  async ngOnInit() {

    if (this.detalle.pregunta.tipoRespuesta.id == 10) {
      const preguntaId = this.detalle.pregunta.id;
      if (preguntaId == 34) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(1);
      } else if (preguntaId == 35) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(3);
      } else if (preguntaId == 36) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(4);
      } else if (preguntaId == 37) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(5);
      } else if (preguntaId == 38) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(6);
      } else if (preguntaId == 39) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(7);
      } else if (preguntaId == 40) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(8);
      } else if (preguntaId == 41) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(9);
      } else if (preguntaId == 42) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(11);
      } else if (preguntaId == 43) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(12);
      } else if (preguntaId == 44) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(13);
      } else if (preguntaId == 45) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(12);
      } else if (preguntaId == 46) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(14);
      } else if (preguntaId == 47) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(15);
      } else if (preguntaId == 48) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(16);
      } else if (preguntaId == 49) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(17);
      } else if (preguntaId == 50) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(18);
      } else if (preguntaId == 51) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(19);
      } else if (preguntaId == 52) {
        this.parametros = await this.paramSrv.getParametrosByTipoId(20);
      }
    }//IF


  }


}
