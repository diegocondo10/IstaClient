import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { User } from '../models/user';

const LOGIN = gql`
query login($username: String!, $password: String!) {
  appPersonas {
    login(username: $username, password: $password) {
      username
      persona {
        id
        identificacion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        Foto
      }
    }
  }
}

`;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private currentUser: User;

  constructor(
    private apollo: Apollo
  ) { }


  public async login(user: User) {
    const watch = await this.apollo.watchQuery({
      query: LOGIN,
      variables: {
        username: user.username,
        password: user.password
      }
    })

    const result = (await watch.result()).data['appPersonas']['login']
    console.log(result);
    this.LOGIN(result)
    return result;

  }

  private LOGIN(user: User): void {
    if (user != null) {
      user.loggedIn = true;
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  public LOGOUT() {
    localStorage.setItem('currentUser', null);
    this.currentUser = null;
  }

  public getUserLoggedIn() {
    if (this.currentUser == null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    return this.currentUser;
  }


}


