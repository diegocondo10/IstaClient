import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


const ADD_DEL_PARAM = gql`
mutation addDelParam($detailRes: Int!, $param: Int!) {
  addDelParametro(idDetalleRespuesta: $detailRes, idParametro: $param) {
    detalle {
      id
    }
  }
}
`


@Injectable({
  providedIn: 'root'
})
export class DetalleParametrosService {

  constructor(
    private apollo: Apollo
  ) { }


  public async addDelParam(idDetalleRes: number, idParam: number) {
    const mutation = await this.apollo.mutate({
      mutation: ADD_DEL_PARAM,
      variables: {
        detailRes: idDetalleRes,
        param: idParam
      }
    })

    const result = (await mutation.toPromise()).data
    console.log(result);

  }
}
