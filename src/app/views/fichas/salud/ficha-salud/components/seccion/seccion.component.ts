import { Component, OnInit, Input } from '@angular/core';
import { DetalleRespuesta } from '../../../../../../models/detalle-respuesta';
import { SeccionFS } from '../../../../../../models/seccion-ficha-salud';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  @Input() seccion: SeccionFS;

  constructor(
  ) { }

  async ngOnInit() {

    this.seccion.detallerespuestaSet = this.seccion.detallerespuestaSet
      .sort(function (item1: DetalleRespuesta, item2: DetalleRespuesta) {
        if (item1.pregunta.numero < item2.pregunta.numero) {
          return -1
        }
        if (item1.pregunta.numero > item2.pregunta.numero) {
          return 1
        }
        return 0
      })



  }

}
