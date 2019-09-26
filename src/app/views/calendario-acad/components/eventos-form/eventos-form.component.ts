import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/calendario-models';
import { CalendarioService } from '../../services/calendario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {

  public evento: Evento = {};
  public id: number

  constructor(
    private srv: CalendarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log(this.id);
    if (this.id) {
      this.evento = await this.srv.getEventoById(this.id);
    }

  }


  async guardar() {
    if (this.id != null) {
      console.log("EDITAR");
      await this.srv.editEvento(this.evento);
    } else {
      console.log("AGREGAR");
      await this.srv.addEvento(this.evento);
    }
    this.router.navigate(['calendario', 'eventos'])
  }


}
