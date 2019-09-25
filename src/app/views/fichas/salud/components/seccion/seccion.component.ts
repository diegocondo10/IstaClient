import { OnInit, Input, Component } from '@angular/core';
import { SeccionFS } from '../../../../../models/seccion-ficha-salud';
import { DetalleRespuesta } from '../../../../../models/detalle-respuesta';

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

    this.desactivarPreguntasDependientes()
  }


  async desactivarPreguntasDependientes() {
    await this.seccion.detallerespuestaSet.forEach(detalle => {
      let preguntaPadre = detalle.pregunta.dependeDe
      if (preguntaPadre) {
        const result = this.seccion.detallerespuestaSet.filter(item => item.pregunta.numero == preguntaPadre.numero)[0];
        if (result.respuesta == 'SI') {
          detalle.pregunta['disabled'] = false;
        } else {
          detalle.pregunta['disabled'] = true;
        }

      } else {
        detalle.pregunta['disabled'] = false;
      }

      if (detalle.pregunta.required) {
        detalle.pregunta['disabled'] = false;
      }

    })
  }


}
