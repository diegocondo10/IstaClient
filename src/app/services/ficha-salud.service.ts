import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { FichaSalud } from '../models/ficha-salud';
import { Responses } from '../models/responses';

const BUSCAR_FICHA = gql`
query buscarFicha($personaId: Int!) {
  ficha(personaId: $personaId){
    id
    seccionfsSet {
      seccionNombre {
        id
        nombre
      }
      detallerespuestaSet {
        id
        pregunta {
          id
          numero
          titulo
          tipoRespuesta {
            id
            nombre
            extra
            parametroSet {
              id
              descripcion
            }
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
    const query = await this.apollo.query<Responses>(
      {
        query: BUSCAR_FICHA,
        variables: {
          personaId: personaId
        }
      }
    )

    return (await query.toPromise()).data.ficha;


  }

}
