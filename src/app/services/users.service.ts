import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { User } from '../models/user';
import { Responses } from '../models/responses';

const LOGIN = gql`
query login($username: String!, $password: String!) {
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

`;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private currentUser: User;

  constructor(
    private apollo: Apollo
  ) { }


  public async login(user: User)//: Promise<User> 
  {
    /*
    const query = await this.apollo.query({
      query: LOGIN,
      variables: {
        username: user.username,
        password: user.password
      }
    });
    const result: User = (await query.toPromise()).data['login'];
    console.log(result);
    this.LOGIN(result)
    return result;
    */
    const watch = await this.apollo.watchQuery({
      query: LOGIN,
      variables: {
        username: user.username,
        password: user.password
      },
      pollInterval: 10000
    })
    const result = (await watch.result()).data['login']
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


