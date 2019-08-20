import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { FichaSalud } from '../models/ficha-salud';
import { Responses } from '../models/responses';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';

const BUSCAR_FICHA = gql`
query buscarFicha($personaId: Int!) {
  ficha(personaId: $personaId) {
    id
    seccionSet {
      id
      nombre
      detallepreguntasSet {
        id
        respuesta
        pregunta {
          id
          pregunta
          tipoRespuesta {
            id
            nombre
            minChar
            maxChar
          }
        }
      }
    }
  }
}

`;

@Injectable({
  providedIn: 'root'
})
export class FichaSaludService {

  constructor(
    private apollo: Apollo
  ) { }


  public buscarFicha(personaId: number): Observable<FichaSalud> {
    return this.apollo.watchQuery<Responses>(
      {
        query: BUSCAR_FICHA,
        variables: {
          personaId: personaId
        }
      }
    ).valueChanges.pipe(
      map(({ data }) => data.ficha)
    )
  }

}
