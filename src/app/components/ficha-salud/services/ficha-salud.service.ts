import {Injectable} from '@angular/core';
import {AGREGAR_PARAMETRO, BUSCAR_FICHA, CONFIRMAR_FICHA, UPDATE_RESPUESTA_FS} from './queries';
import {Apollo} from 'apollo-angular';
import {
  Diagnostico,
  DiagnosticoDiscapacidad,
  DiagnosticoMedicamento,
  NuevoParametro,
  ParametroFs,
  PreguntaFs,
  SeccionFs
} from '../../fichas-dashboard/models/appFichas';

@Injectable({
  providedIn: 'root'
})
export class FichaSaludService {

  constructor(private apollo: Apollo) {
  }

  public async buscarFichaSalud(personaId: number) {

    const query = this.apollo.query({
      query: BUSCAR_FICHA,
      variables: {
        personaId: personaId
      },
      fetchPolicy: 'no-cache'
    });

    const promise = await query.toPromise();
    const ficha = promise.data['appFs']['fichaSalud'] as SeccionFs[];


    ficha.forEach(seccion => seccion.preguntafsSet.forEach(pregunta => {
      pregunta.seccion = seccion;
      if (pregunta.dependeDe) {
        pregunta.dependeDe = seccion.preguntafsSet.filter(item => item.id === pregunta.dependeDe.id)[0];
      }
    }));

    ficha.forEach(seccion => seccion.preguntafsSet.forEach(pregunta => {
      const JSONstring = pregunta.respuestaPersona.respuestas as string;
      pregunta.respuestaPersona['select'] = {};
      pregunta.respuestaPersona['simple'] = '';
      pregunta.respuestaPersona['diagnosticos'] = [];
      pregunta.respuestaPersona['diagnosticos-discapacidad'] = [];
      pregunta.respuestaPersona['diagnosticos-medicamentos'] = [];

      if (JSONstring) {

        const res = JSON.parse(JSONstring);
        if (res.simple) {
          pregunta.respuestaPersona['simple'] = res.simple;
        } else if (res.parametro) {

          pregunta.respuestaPersona['select'] = res.parametro as ParametroFs;

          switch (pregunta.respuestaPersona['select'].titulo) {
            case 'SI':
              this.activarPreguntas(pregunta, false);
              break;
            case 'NO':
              this.activarPreguntas(pregunta, true);
              break;

          }

        } else if (res.parametros) {

          res.parametros.forEach(parametro => this.checkParams(pregunta, parametro));

        } else if (res.diagnosticos) {

          pregunta.respuestaPersona['diagnosticos'] = res.diagnosticos as Diagnostico;

        } else if (res.diagnosticosDiscapacidad) {
          pregunta.respuestaPersona['diagnosticos-discapacidad'] = res.diagnosticosDiscapacidad as DiagnosticoDiscapacidad;
        } else if (res.diagnosticosMedicamentos) {
          pregunta.respuestaPersona['diagnosticos-medicamentos'] = res.diagnosticosMedicamentos as DiagnosticoMedicamento;
        }


      }

      if (pregunta.required === true && pregunta.tipo === 'SELECT') {
        const result = pregunta.respuestaPersona['select'].titulo;

        if (result === undefined) {
          const preguntasHijas = seccion.preguntafsSet.filter(item => item.dependeDe === pregunta);
          if (preguntasHijas.length > 0) {
            this.activarPreguntas(pregunta, true);
          }
        }

      }


    })); // FOR DE LAS SECCIONES
    return ficha;

  }

  activarPreguntas(preguntaPadre: PreguntaFs, disabled: boolean) {
    const preguntasHijas = preguntaPadre.seccion.preguntafsSet.filter(item => item.dependeDe === preguntaPadre);
    preguntasHijas.forEach(obj => obj['disabled'] = disabled);
  }

  private checkParams(pregunta: PreguntaFs, parametro: ParametroFs): void {
    pregunta.parametros.filter(param => param.id === parametro.id)[0].check = true;
  }

  public updateRespuestaFs(id: number, respuesta: string) {
    this.apollo.mutate({
      mutation: UPDATE_RESPUESTA_FS,
      variables: {
        id: id,
        respuesta: respuesta
      }
    }).toPromise()
      .then();
  }

  public async agregarParametro(input: NuevoParametro) {
    const mutation = this.apollo.mutate({
      mutation: AGREGAR_PARAMETRO,
      variables: {
        input: input
      }
    });
    const promise = await mutation.toPromise();
    return promise.data['appFs']['agregarParametro'];

  }


  confirmarFicha(idPersona: number) {
    const mutation = this.apollo.mutate({
      mutation: CONFIRMAR_FICHA,
      variables: {
        idPersona: idPersona
      }
    });

    return mutation.toPromise().then(res => res.data['appFs']['confirmarFicha']);

  }

}
