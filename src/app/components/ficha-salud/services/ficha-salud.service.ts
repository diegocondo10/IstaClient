import { Injectable } from "@angular/core";
import { UPDATE_RESPUESTA_FS, BUSCAR_FICHA } from "./queries";
import { Apollo } from "apollo-angular";
import { SeccionFs, PreguntaFs, ParametroFs, RespuestaFs } from '../../fichas-dashboard/models/appFichas';

@Injectable({
  providedIn: "root"
})
export class FichaSaludService {
  constructor(private apollo: Apollo) { }

  public async buscarFichaSalud(personaId: number) {
    const query = await this.apollo.query({
      query: BUSCAR_FICHA,
      variables: {
        personaId: personaId
      },
      fetchPolicy: "no-cache"
    });

    const promise = await query.toPromise();

    const ficha = promise.data["appFs"]["fichaSalud"] as SeccionFs[];

    ficha.forEach(obj => {
      obj.preguntafsSet.forEach((prg: PreguntaFs) => {
        const JSONstring = prg.respuestaPersona.respuestas as string;

        if (JSONstring) {

          const res = JSON.parse(JSONstring);

          if (res.parametro) {
            prg.respuestaPersona.respuestas = res.parametro as ParametroFs
            console.log(prg.respuestaPersona.respuestas.id);

          } else if (res.parametros) {
            res.parametros.forEach((obj: ParametroFs) => this.checkParams(prg, obj));
          } else if (res.diagnosticos) {
            /* this.resTemplate.diagnosticos = res.diagnosticos; */
          }
        }
      });
      // FOR DE LAS PREGUNTAS
    }); //FOR DE LAS SECCIONES

    return ficha

  }

  private checkParams(pregunta: PreguntaFs, obj: ParametroFs): void {
    const param = pregunta.parametros.filter(param => param.id === obj.id)[0];
    param.check = true;
  }

  public updateRespuestaFs(id: number, respuesta: string) {
    this.apollo
      .mutate({
        mutation: UPDATE_RESPUESTA_FS,
        variables: {
          id: id,
          respuesta: respuesta
        }
      })
      .toPromise()
      .then();
  }
}
