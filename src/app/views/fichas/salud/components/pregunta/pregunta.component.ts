import { Component, OnInit, Input, Host } from '@angular/core';
import { Parametro } from '../../../../../models/parametro';
import { DetalleRespuesta } from '../../../../../models/detalle-respuesta';
import { DetalleRespuestaService } from '../../../services/detalle-respuesta.service';
import { DetalleParametrosService } from '../../../services/detalle-parametros.service';
import { DetalleParametro } from '../../../../../models/detalle-parametros';
import { FichaSaludService } from '../../services/ficha-salud.service';
import { UsersService } from '../../../../../services/users.service';
import { SeccionComponent } from '../seccion/seccion.component';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public parametros: Parametro[];
  public otro: string
  @Input() detalle: DetalleRespuesta

  public errorMsg: string = ''

  public disabledPrg: boolean;


  constructor(
    private detPrgSrv: DetalleRespuestaService,
    private detParamSrv: DetalleParametrosService,
    private fichaSrv: FichaSaludService,
    private userSrv: UsersService,
    @Host() private host: SeccionComponent
  ) { }

  async ngOnInit() {
    this.parametros = this.detalle.detalleparametrosSet
    this.parametros.forEach(obj => this.changeState(obj))

    this.disabledPrg = this.valorDependeDe()

  }

  private changeState(detalle: DetalleParametro) {

    const result: Parametro = this.detalle.pregunta.tipoRespuesta.parametroSet
      .filter((item: Parametro) => item.id == detalle.parametro.id)[0]

    if (result != null) {
      result.checked = true
    }

  }

  async check(checked, parametro: Parametro) {
    parametro.checked = checked
    await this.detParamSrv.addDelParam(this.detalle.id, parametro.id)
  }


  async respuesta() {
    await this.detPrgSrv.updateResFS(this.detalle.id, this.detalle.respuesta)
  }

  async btnAgregarOtro() {
    try {
      const result: DetalleParametro = await this.fichaSrv.agregarOtroParametro({
        nombre: this.otro.charAt(0).toUpperCase() + this.otro.slice(1),
        idTipo: this.detalle.id,
        idDetalleRespuesta: this.detalle.pregunta.tipoRespuesta.id,
        agregadoPor: this.userSrv.getUserLoggedIn().persona.identificacion
      })


      result.parametro.checked = true
      this.detalle.pregunta.tipoRespuesta.parametroSet.push(result.parametro)

      this.otro = '';

    } catch (error) {
      /*      setInterval(async () => {
     
           }, 3000); */
      alert("YA EXISTE UN PARAMETRO CON ESE NOMBRE!!")
    }


  }



  public valorDependeDe() {
    try {
      const id = this.detalle.pregunta.dependeDe['id']

      const result = this.host.seccion.detallerespuestaSet.filter(item => item.pregunta.id == id)[0]
      if (result == undefined || result.respuesta == 'SI' || result == null) {
        return false;
      }
      return true

    } catch (error) {
    }


  }
}