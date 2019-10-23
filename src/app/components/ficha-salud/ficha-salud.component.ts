import {Component, OnInit} from '@angular/core';
import {FichaSaludService} from './services/ficha-salud.service';
import {UsersService} from '../../services/users.service';
import {SeccionFs, PreguntaFs, ParametroFs, Diagnostico} from '../fichas-dashboard/models/appFichas';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ficha-salud',
  templateUrl: './ficha-salud.component.html',
  styleUrls: ['./ficha-salud.component.css']
})
export class FichaSaludComponent implements OnInit {
  public ficha: SeccionFs[];
  public diagnostico: Diagnostico = {
    parentesco: '',
    diagnostico: '',
    medicacion: 'SI'
  };

  public accion: 'add' | 'upt';
  public pregunta: PreguntaFs;

  constructor(private srv: FichaSaludService, private userSrv: UsersService, private router: Router) {
  }

  async ngOnInit() {
    this.ficha = await this.srv.buscarFichaSalud(this.userSrv.getUserLoggedIn().persona.id);
  }

  /*
   * FUNCIONES DE CALLBACKS Y PROCESOS QUE SE REPITEN
   * */

  generarJSONparametros(result): string {
    return JSON.stringify(result)
      .replace(/,"__typename":"ParametroFsType"/g, '')
      .replace(/,"check":true/g, '');
  }

  generarJSONDiagnosticos(pregunta: PreguntaFs) {
    let json = '{"diagnosticos":';
    json += JSON.stringify(pregunta.respuestaPersona['diagnosticos']);
    json += '}';
    return json;
  }

  descartivarPreguntasHijas() {

  }

  /*
   *   EVENTOS DEL TEMPLATE
   * */
  check(pregunta: PreguntaFs, parametro: ParametroFs, event) {
    parametro.check = event.checked;

    const result = pregunta.parametros.filter(params => params.check);

    let json = null;
    if (result.length > 0) {
      json = '{"parametros":';
      json += this.generarJSONparametros(result);
      json += '}';
    }

    this.srv.updateRespuestaFs(pregunta.respuestaPersona.id, json);
  }

  select(pregunta: PreguntaFs, event) {
    const result = pregunta.parametros.filter(param => param.id === event.value)[0];

    let json = '{"parametro":';
    json += this.generarJSONparametros(result);
    json += '}';

    switch (result.titulo) {
      case 'SI':
        this.srv.activarPreguntas(pregunta, false);
        break;
      case 'NO':
        this.srv.activarPreguntas(pregunta, true);
        break;
    }

    this.srv.updateRespuestaFs(pregunta.respuestaPersona.id, json);
  }

  simple(pregunta: PreguntaFs, event) {
    const json = `{"simple":"${event.value}"}`;
    this.srv.updateRespuestaFs(pregunta.respuestaPersona.id, json);
  }

  agregarNuevo(pregunta: PreguntaFs, event) {
    const result = pregunta.parametros.filter((param: ParametroFs) => param.titulo.toLowerCase().includes(event.value.toLowerCase()));
    if (result.length > 0) {
      alert('YA EXISTE ESE PARAMETRO!!');
    } else {

    }
  }


  guardarDiagnostico() {
    if (this.accion === 'add') {
      this.pregunta.respuestaPersona['diagnosticos'].push(this.diagnostico);
    }
    const json = this.generarJSONDiagnosticos(this.pregunta);
    this.srv.updateRespuestaFs(this.pregunta.respuestaPersona.id, json);
  }

  eliminarDiagnostico(pregunta: PreguntaFs, diagnostico: Diagnostico) {
    const index = pregunta.respuestaPersona['diagnosticos'].indexOf(diagnostico);
    pregunta.respuestaPersona['diagnosticos'].splice(index, 1);
    let json = null;
    if (pregunta.respuestaPersona['diagnosticos'].length !== 0) {
      json = this.generarJSONDiagnosticos(pregunta);
    }
    this.srv.updateRespuestaFs(pregunta.respuestaPersona.id, json);
  }

  abrirModal(accion: 'add' | 'upt', pregunta: PreguntaFs, diagnostico?: Diagnostico) {
    this.diagnostico = diagnostico || this.diagnostico;
    this.accion = accion;
    this.pregunta = pregunta;
  }


  confirmarFicha() {
    this.router.navigate(['/fichas/confirmar']);
  }

}
