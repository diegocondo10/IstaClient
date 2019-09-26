import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_EVENTOS, ADD_EVENTO } from './queries';
import { Evento } from '../models/calendario-models';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(
    private apollo: Apollo
  ) { }


  public async getEventos() {
    const query = await this.apollo.query({
      query: GET_EVENTOS,
      fetchPolicy: 'network-only'
    });

    const promise = await query.toPromise()

    return promise.data['appCalendarioAcademico']['eventos'] as Evento[];

  }

  public async addEvento(evento: Evento): Promise<Evento> {

    const mutation = await this.apollo.mutate({
      mutation: ADD_EVENTO,
      variables: {
        titulo: evento.titulo,
        descripcion: evento.descripcion,
        color: evento.color
      }
    })

    const promise = await mutation.toPromise()

    return promise.data['appCalendarioAcad']['addEvento'] as Evento


  }




}
