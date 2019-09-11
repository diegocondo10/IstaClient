import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const CREATE = gql`
mutation crearDiagnostico( $detalle:DetalleDiagnosticoInput!) {
  diagnosticoFamiliar(detalle: $detalle, operation: CREATE) {
    detalle {
      id
      parentesco
      diagnostico
      detalleRespuesta {
        id
      }
    }
  }
}
`;

const DELETE = gql`
mutation eliminarDiagnostico($detalle: DetalleDiagnosticoInput!) {
  diagnosticoFamiliar(detalle: $detalle, operation: DELETE) {
    detalle {
      id
    }
  }
}
`;

const UPDATE = gql`
mutation editarDiagnostico($detalle: DetalleDiagnosticoInput!) {
  diagnosticoFamiliar(detalle: $detalle, operation: UPDATE) {
    detalle {
      id
      detalleRespuesta {
        id
      }
      parentesco
      diagnostico
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

    const mutation = await this.mutation(detalle, CREATE);

    return (await mutation.toPromise()).data['diagnosticoFamiliar']['detalle']

  }

  public async deleteDetalleDiagnostico(detalle) {
    const mutation = await this.mutation(detalle, DELETE);
    try {
      await mutation.toPromise()
    } catch (error) {

    }
  }

  public async updateDiagnostico(detalle) {
    const mutation = await this.mutation(detalle, UPDATE)
    return (await mutation.toPromise()).data['diagnosticoFamiliar']['detalle']
  }

  private async mutation(detalle, query) {
    return await this.apollo.mutate({
      mutation: query,
      variables: {
        detalle: detalle
      }
    })
  }


}
