import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { TipoRespuesta } from '../../../models/tipo-respuesta';
import { map } from 'rxjs/operators';

const FIND_TIPO_RESPUESTA = gql`
query findTipoDeRespuestaByPreguntaID($preguntaID: Int!) {
  tipoRespuesta(preguntaId: $preguntaID) {
    id
    nombre
    minChar
    maxChar
  }
}

`



@Injectable({
  providedIn: 'root'
})
export class TipoRespuestaService {

  constructor(
    private apollo: Apollo
  ) { }

  public findTipoRespuestaByPreguntaID(preguntaID: number): Observable<TipoRespuesta> {

    return this.apollo.watchQuery({
      query: FIND_TIPO_RESPUESTA,
      variables: {
        preguntaId: preguntaID
      }
    }).valueChanges.pipe(
      map((data) => data.data['tipoRespuesta'])
    )

  }

}
