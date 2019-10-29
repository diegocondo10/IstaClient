import {Component, OnInit} from '@angular/core';
import {FichaSaludService} from './services/ficha-salud.service';
import {UsersService} from '../../services/users.service';
import {
  Diagnostico,
  DiagnosticoDiscapacidad,
  DiagnosticoMedicamento,
  ParametroFs,
  PreguntaFs,
  SeccionFs
} from '../fichas-dashboard/models/appFichas';
import {Router} from '@angular/router';
import {User} from "../../models/user";

@Component({
  selector: 'app-ficha-salud',
  templateUrl: './ficha-salud.component.html',
  styleUrls: ['./ficha-salud.component.css']
})
export class FichaSaludComponent implements OnInit {
  public ficha: SeccionFs[];
  public diagnostico: Diagnostico = {};
  public diagnosticoDiscapacidad: DiagnosticoDiscapacidad = {};
  public diagnosticoMedicamento: DiagnosticoMedicamento = {};

  public accion: 'add' | 'upt';
  public pregunta: PreguntaFs;
  public user: User;

  constructor(private srv: FichaSaludService, private userSrv: UsersService, private router: Router) {
  }

  async ngOnInit() {
    this.ficha = await this.srv.buscarFichaSalud(this.userSrv.getUserLoggedIn().persona.id);
    this.user = this.userSrv.getUserLoggedIn();
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

  generarJSONDiagnosticosDiscapacidad(pregunta: PreguntaFs) {
    let json = '{"diagnosticosDiscapacidad":';
    json += JSON.stringify(pregunta.respuestaPersona['diagnosticos-discapacidad']);
    json += '}';
    return json;
  }

  generarJSONDiagnosticosMedicamentos(pregunta: PreguntaFs) {
    let json = '{"diagnosticosMedicamentos":';
    json += JSON.stringify(pregunta.respuestaPersona['diagnosticos-medicamentos']);
    json += '}';
    return json;
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

  async agregarNuevo(pregunta: PreguntaFs, event) {

    if (event.value === '') {

      alert('TIENE QUE PONER UN NOMBRE PARA EL PARAMETRO!!!');

    } else {

      const result = pregunta.parametros.filter((param: ParametroFs) => param.titulo.toLowerCase().includes(event.value.toLowerCase()));
      if (result.length > 0) {
        alert('YA EXISTE ESE PARAMETRO!!');
      } else {

        const result: ParametroFs = await this.srv.agregarParametro({
          agregadoPor: this.user.persona.identificacion,
          pregunta: pregunta.id,
          titulo: event.value
        });
        result.check = true;
        result.titulo = event.value;

        pregunta.parametros.push(result);

        event.value = '';

      }
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

  abrirModalDiagnostico(accion: 'add' | 'upt', pregunta: PreguntaFs, diagnostico?: DiagnosticoDiscapacidad) {
    this.accion = accion;
    this.pregunta = pregunta;

    if (accion === 'upt') {
      this.diagnostico = diagnostico;
    } else {

      this.diagnostico = {
        parentesco: '',
        diagnostico: '',
        medicacion: 'SI'
      };
    }

  }


  guardarDiagnosticoDiscapacidad() {
    if (this.accion === 'add') {
      this.pregunta.respuestaPersona['diagnosticos-discapacidad'].push(this.diagnosticoDiscapacidad);
    }
    const json = this.generarJSONDiagnosticosDiscapacidad(this.pregunta);
    this.srv.updateRespuestaFs(this.pregunta.respuestaPersona.id, json);
  }


  abrirModalDiscapacidad(accion: 'add' | 'upt', pregunta: PreguntaFs, diagnostico?: Diagnostico) {
    this.accion = accion;
    this.pregunta = pregunta;
    if (accion === 'upt') {
      this.diagnosticoDiscapacidad = diagnostico;
    } else {

      this.diagnosticoDiscapacidad = {
        parentesco: '',
        porcentaje: 1,
        noCarnet: '',
        tipoDiscapacidad: ''
      };
    }
  }

  eliminarDiagnosticoDiscapacidad(pregunta: PreguntaFs, diagnostico: Diagnostico) {
    const index = pregunta.respuestaPersona['diagnosticos-discapacidad'].indexOf(diagnostico);
    pregunta.respuestaPersona['diagnosticos-discapacidad'].splice(index, 1);
    let json = null;
    if (pregunta.respuestaPersona['diagnosticos-discapacidad'].length !== 0) {
      json = this.generarJSONDiagnosticosDiscapacidad(pregunta);
    }
    this.srv.updateRespuestaFs(pregunta.respuestaPersona.id, json);
  }


  abrirModalMedicamentos(accion: 'add' | 'upt', pregunta: PreguntaFs, diagnostico?: Diagnostico) {
    this.accion = accion;
    this.pregunta = pregunta;
    if (accion === 'upt') {
      this.diagnosticoMedicamento = diagnostico;
    } else {

      this.diagnosticoMedicamento = {
        parentesco: '',
        tipoMedicamento: ''
      };
    }
  }


  eliminarDiagnosticoMedicamentos(pregunta: PreguntaFs, diagnostico: Diagnostico) {
    const index = pregunta.respuestaPersona['diagnosticos-medicamentos'].indexOf(diagnostico);
    pregunta.respuestaPersona['diagnosticos-medicamentos'].splice(index, 1);
    let json = null;
    if (pregunta.respuestaPersona['diagnosticos-medicamentos'].length !== 0) {
      json = this.generarJSONDiagnosticosMedicamentos(pregunta);
    }
    this.srv.updateRespuestaFs(pregunta.respuestaPersona.id, json);
  }

  guardarMedicamento() {
    if (this.accion === 'add') {
      this.pregunta.respuestaPersona['diagnosticos-medicamentos'].push(this.diagnosticoMedicamento);
    }
    const json = this.generarJSONDiagnosticosMedicamentos(this.pregunta);
    this.srv.updateRespuestaFs(this.pregunta.respuestaPersona.id, json);
  }


  confirmarFicha() {
    this.router.navigate(['/fichas/confirmar']);
    this.srv.confirmarFicha(this.user.persona.id)
      .then(data => console.log(data));
  }


}
