import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Parametro } from '../models/parametro';
import { Responses } from '../models/responses';
import { map } from 'rxjs/operators';


const PARAMETROS_POR_TIPO = gql`
query parametrosPorTipo($IDtipo: Int!) {
  parametros(tipoRespuesta: $IDtipo) {
    id
    descripcion
  }
}

`;


@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  constructor(
    private apollo: Apollo
  ) { }

  public async getParametrosPor(idTipo: number): Promise<Parametro[]> {
    const query = await this.apollo.query<Responses>({
      query: PARAMETROS_POR_TIPO,
      variables: {
        IDtipo: idTipo
      },
      fetchPolicy: 'cache-first'
    })

    return (await query.toPromise()).data.parametros

  }



}
