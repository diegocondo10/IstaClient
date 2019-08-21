import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Pregunta } from '../models/pregunta';
import { Responses } from '../models/responses';


const PREGUNTAS = gql`
{
  preguntas {
    id
    pregunta
    tipoRespuesta {
      id
      nombre
      minChar
      minChar
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


  public async getAllPreguntas(): Promise<Pregunta[]> {
    const query = await this.apollo.query<Responses>({
      query: PREGUNTAS,
      fetchPolicy: 'cache-first'
    })
    return (await query.toPromise()).data.preguntas
  }

}
