import { Component, OnInit, Input } from '@angular/core';
import { SeccionFS } from '../../../../models/seccion-ficha-salud';
import { Pregunta } from '../../../../models/pregunta';
import { PreguntaService } from '../../../../services/pregunta.service';
import { Parametro } from '../../../../models/parametro';
import { ParametroService } from '../../../../services/parametro.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  @Input() seccion: SeccionFS;
  public preguntas: Pregunta[]

  public parametros: Parametro[]

  constructor(
    private preguntaSrv: PreguntaService,
    private paramSrv: ParametroService
  ) { }

  async ngOnInit() {
    console.log(this.seccion.detallerespuestaSet);


  }

}
