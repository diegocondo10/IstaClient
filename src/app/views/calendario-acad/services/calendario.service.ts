import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_EVENTOS, ADD_EVENTO, GET_EVENTO_BY_ID, EDIT_EVENTO, DELETE_EVENTO, GET_CALENDARIO_BY_PERIODO, ADD_DETALLE_CALENDAR } from './queries';
import { Evento, CalendarioAcad, DetalleCalendario } from '../models/calendario-models';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  constructor(
    private apollo: Apollo
  ) { }


  public async getCalendarioBy(idPeriodo: number) {
    const query = await this.apollo.query({
      query: GET_CALENDARIO_BY_PERIODO,
      variables: {
        idPeriodo: idPeriodo
      }
    });

    const promise = await query.toPromise()

    return promise.data['appCalendarioAcademico']['calendario'] as CalendarioAcad

  }


  public async getEventos() {
    const query = await this.apollo.query({
      query: GET_EVENTOS,
      fetchPolicy: 'network-only'
    });

    const promise = await query.toPromise()

    return promise.data['appCalendarioAcademico']['eventos'] as Evento[];

  }

  public async getEventoById(id: number): Promise<Evento> {
    const query = await this.apollo.query({
      query: GET_EVENTO_BY_ID,
      variables: {
        id: id
      }
    })

    const promise = await query.toPromise()
    return promise.data['appCalendarioAcademico']['eventoById'] as Evento

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

  public async editEvento(evento: Evento): Promise<Evento> {
    const mutation = await this.apollo.mutate({
      mutation: EDIT_EVENTO,
      variables: {
        id: evento.id,
        titulo: evento.titulo,
        descripcion: evento.descripcion,
        color: evento.color
      }
    })
    const promise = await mutation.toPromise()
    return promise.data['appCalendarioAcad']['addEvento'] as Evento

  }

  public async deleteEvento(evento: Evento): Promise<Evento> {
    const mutation = await this.apollo.mutate({
      mutation: DELETE_EVENTO,
      variables: {
        id: evento.id,
        titulo: evento.titulo,
        descripcion: evento.descripcion,
        color: evento.color
      }
    })
    const promise = await mutation.toPromise()
    return promise.data['appCalendarioAcad']['addEvento'] as Evento

  }

  public async addDetalleCalendario(detalle: DetalleCalendario) {
    const mutation = await this.apollo.mutate({
      mutation: ADD_DETALLE_CALENDAR,
      variables: {
        input: {
          fechaInicio: detalle.fechaInicio,
          fechaFin: detalle.fechaFin,
          calendario: detalle.calendario.id,
          evento: detalle.evento.id
        }
      }
    });

    const promise = await mutation.toPromise()

    return promise.data['appCalendarioAcad']['addDetalle'] as DetalleCalendario

  }


}
