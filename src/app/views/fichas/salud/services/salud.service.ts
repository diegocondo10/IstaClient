import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {BUSCAR_FICHA, UPDATE_RESPUESTA_FS} from './queries';

@Injectable({
  providedIn: 'root'
})
export class SaludService {

  constructor(
    private apollo: Apollo
  ) {
  }

  public buscarFichaSalud(personaId: number) {
    return this.apollo.query({
      query: BUSCAR_FICHA,
      variables: {
        personaId: personaId
      },
      fetchPolicy: 'no-cache'
    });

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


}
