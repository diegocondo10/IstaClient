import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/calendario-models';
import { CalendarioService } from '../../services/calendario.service';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {

  public evento: Evento = {};

  constructor(
    private srv: CalendarioService
  ) { }

  ngOnInit() {


  }


  async guardar() {
    const result = await this.srv.addEvento(this.evento);
    console.log(result);
  }


}
