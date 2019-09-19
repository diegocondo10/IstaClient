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

  ngOnInit() {

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

    this.seccion.detallerespuestaSet.forEach(detalle => {
      if (detalle.pregunta.dependeDe) {
        const detalleBusqueda = this.seccion.detallerespuestaSet.filter(item => item.pregunta.numero == detalle.pregunta.dependeDe.numero)[0]
        detalle.pregunta.dependeDe = detalleBusqueda.pregunta
        detalle.pregunta.dependeDe['respuestaDepente'] = detalleBusqueda.respuesta

        /*         console.log(`-----> pregunta: ${detalle.pregunta.numero}`);
                console.log(`-----> depende: ${detalle.pregunta.dependeDe.numero}`);
                console.log(`-----> depende: ${detalle.pregunta.dependeDe['respuestaDepente']}`);
                console.log("");
                console.log("");
                console.log("");
                console.log("");
                console.log(""); */

      }

    })


  }

}
