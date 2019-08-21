import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Parametro } from '../models/parametro';
import { Responses } from '../models/responses';
import { map } from 'rxjs/operators';


const PARAMETROS_ALL = gql`
{
  parametros {
    id
    descripcion
    tipoParametro {
      id
    }
  }
}
`



@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  constructor(
    private apollo: Apollo
  ) { }

  public async getAllParametros(): Promise<Parametro[]> {
    const query = await this.apollo.query<Responses>({
      query: PARAMETROS_ALL,
      fetchPolicy: 'cache-first'
    })

    return (await query.toPromise()).data.parametros

  }

}
