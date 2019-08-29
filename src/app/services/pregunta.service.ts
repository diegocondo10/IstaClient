import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Pregunta } from '../models/pregunta';
import { Responses } from '../models/responses';


const PREGUNTAS = gql`
query preguntasPorSeccion($seccionID: Int!) {
  preguntas(seccionId: $seccionID) {
    id
    titulo
    numero
    tipoRespuesta {
      id
      nombre
      extra
    }
  }
}

`

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {



  constructor(
    private apollo: Apollo
  ) { }


  public async getPreguntasBySeccion(seccionID: number): Promise<Pregunta[]> {
    const query = await this.apollo.query<Responses>({
      query: PREGUNTAS,
      variables: {
        seccionID: seccionID
      },
      fetchPolicy: 'cache-first'
    })
    return (await query.toPromise()).data.preguntas
  }

}
