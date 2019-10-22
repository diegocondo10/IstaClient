import { OnInit, Component } from '@angular/core';
import { DetalleCalendario, Evento } from '../../views/calendario-acad/models/calendario-models';
import { CalendarioService } from '../../views/calendario-acad/services/calendario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public detalleCal: DetalleCalendario = {
    calendario: {}
  }
  public evento: Evento = {}
  public eventos: Evento[]
  public idCal: number

  constructor(
    private srv: CalendarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.idCal = this.route.snapshot.params['idCalendario']
    this.eventos = await this.srv.getEventos()
  }

  async guardar(param) {
    this.detalleCal.evento = this.evento
    this.detalleCal.calendario.id = this.idCal
    if (param === '') {

      this.detalleCal = {
        calendario: {}
      }
      this.evento = {}

      this.router.navigate(['/calendario/detalle-add', this.idCal])
    } else {
      this.router.navigate(['/calendario/lista'])
    }
    await this.srv.addDetalleCalendario(this.detalleCal)
    this.detalleCal = {
      calendario: {}
    }
    this.evento = {}
  }

}
