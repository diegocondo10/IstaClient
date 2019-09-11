import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { DetalleDiagnostico } from '../../../models/detalle-diagnostico';

const CREATE = gql`
mutation crearDiagnostico( $detalle:DetalleDiagnosticoInput!) {
  diagnosticoFamiliar(detalle: $detalle, operation: CREATE) {
    detalle {
      id
      parentesco
      diagnostico
      detalleRespuesta {
        id
        pregunta {
          id
        }
      }
    }
  }
}
`;



@Injectable({
  providedIn: 'root'
})
export class DetalleDiagnosticoService {

  constructor(
    private apollo: Apollo
  ) { }

  public async createDetalleDiagnostico(detalle) {

    console.log(detalle);

    const mutation = await this.apollo.mutate({
      mutation: CREATE,
      variables: {
        detalle: detalle
      }
    })

    const result = (await mutation.toPromise()).data
    console.log(result);
  }


}
