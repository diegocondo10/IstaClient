import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarioService } from '../../services/calendario.service';
import { CalendarioAcad, DetalleCalendario } from '../../models/calendario-models';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../services/users.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public calendario: CalendarioAcad
  calendarPlugins = [dayGridPlugin]; // important!
  calendarEvents = [{}];
  private idPeriodo: number

  constructor(
    private srv: CalendarioService,
    public userSrv: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {

    this.idPeriodo = this.route.snapshot.params['idPeriodo']


    this.calendario = await this.srv.getCalendarioBy(this.idPeriodo)
    this.calendario.detallecalendarioSet.forEach((obj: DetalleCalendario) => {
      this.calendarEvents = this.calendarEvents.concat({
        title: obj.evento.titulo,
        color: obj.evento.color,
        start: obj.fechaInicio + "",
        end: obj.fechaFin + ""
      })
    });

  }

  select($event) {
    console.log($event);
  }

}
