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
          required
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


const CONFIRMAR_FICHA = gql`
mutation confirmarFicha($ID: ID, $state: String!) {
  ficha(ficha: {id: $ID, estadoEnvio: $state}, operation: UPDATE) {
    ficha {
      id
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
        },
        fetchPolicy: 'network-only'
      }
    ).valueChanges

  }

  public async confirmarFicha(IDficha: number, state: string) {
    const mutation = await this.apollo.mutate({
      mutation: CONFIRMAR_FICHA,
      variables: {
        ID: IDficha,
        state: state
      }
    })

    const result = (await mutation.toPromise()).data
    console.log(result);

  }

}
