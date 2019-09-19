import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


const UPDATE_RES = gql`
mutation updateRespuestaFS($ID: ID, $respuesta: String!) {
  updResFs(id: $ID, respuesta: $respuesta) {
    detalle {
      id
      respuesta
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class DetalleRespuestaService {

  constructor(
    private apollo: Apollo
  ) { }

  public async updateResFS(id: number, respuesta: string) {

    const mutation = await this.apollo.mutate({
      mutation: UPDATE_RES,
      variables: {
        ID: id,
        respuesta: respuesta
      }
    })

    const result = (await mutation.toPromise()).data
    //console.log(result);

  }

}
