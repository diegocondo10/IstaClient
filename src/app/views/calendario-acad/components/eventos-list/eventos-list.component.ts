import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../../services/calendario.service';
import { Evento } from '../../models/calendario-models';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {

  public eventos: Evento[];
  public loading: boolean = true;

  constructor(
    private srv: CalendarioService
  ) { }

  async ngOnInit() {
    this.eventos = await this.srv.getEventos();
    this.loading = false;
  }

  async btnEliminar(evento: Evento) {
    await this.srv.deleteEvento(evento)
    const indice = this.eventos.indexOf(evento)

    this.eventos.splice(indice, 1);

  }

}
