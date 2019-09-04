import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

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
        respuesta
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
        detalleparametrosSet {
          id
          detalleRespuesta {
            id
          }
          parametro {
            id
          }
        }
        detallediagnosticoSet {
          id
          diagnostico {
            parentesco
            diagnostico
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


  public findFichaByPersonaID(personaId: number) {
    return this.apollo.watchQuery(
      {
        query: BUSCAR_FICHA,
        variables: {
          personaId: personaId
        }
      }
    ).valueChanges


  }

}
