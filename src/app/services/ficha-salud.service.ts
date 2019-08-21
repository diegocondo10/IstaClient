import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { FichaSalud } from '../models/ficha-salud';
import { Responses } from '../models/responses';

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


  public async findFichaByPersonaID(personaId: number): Promise<FichaSalud> {
    const query = this.apollo.query<Responses>(
      {
        query: BUSCAR_FICHA,
        variables: {
          personaId: personaId
        },
        fetchPolicy: 'cache-first'
      }
    )

    return (await query.toPromise()).data.ficha;


  }

}
