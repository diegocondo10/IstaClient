import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarioService } from '../../services/calendario.service';
import { CalendarioAcad, DetalleCalendario } from '../../models/calendario-models';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public calendario: CalendarioAcad

  constructor(
    private srv: CalendarioService
  ) { }
  calendarPlugins = [dayGridPlugin]; // important!
  calendarEvents = [
    { title: 'event 1', start: '2019-04-01', end: '2019-04-01', color: '#cb3234' }
  ];
  modifyTitle(eventIndex, newTitle) {
    this.calendarEvents[eventIndex].title = newTitle;
  }
  async ngOnInit() {

    this.calendario = await this.srv.getCalendarioBy(21)
    this.calendario[0].detallecalendarioSet.forEach((obj: DetalleCalendario) => {
      this.calendarEvents.push({
        title: obj.evento.titulo,
        color: obj.evento.color,
        start: obj.fechaInicio + "",
        end: obj.fechaFin + ""
      })
    })




  }


}
