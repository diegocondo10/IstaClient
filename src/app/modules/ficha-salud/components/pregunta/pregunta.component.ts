import { Component, OnInit, Input, Host } from '@angular/core';
import { Parametro } from '../../../../models/parametro';
import { ParametroService } from '../../../../services/parametro.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public parametros: Parametro[];

  public navbarCollapsed = true

  constructor(
    public paramSrv: ParametroService
  ) { }

  async ngOnInit() {




  }


}
