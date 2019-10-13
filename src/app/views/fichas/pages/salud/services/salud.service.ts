import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BUSCAR_FICHA, CONFIRMAR_FICHA, PARAMETRO_OTRO } from './queries';

@Injectable({
  providedIn: 'root'
})
export class SaludService {

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
    )

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

  public async agregarOtroParametro(params) {
    const mutations = await this.apollo.mutate({
      mutation: PARAMETRO_OTRO,
      variables: {
        params: params
      }
    })

    return (await mutations.toPromise()).data['crearParametro']['detalle']

  }
}
