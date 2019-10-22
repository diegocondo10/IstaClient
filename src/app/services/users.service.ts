import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { User } from "../models/user";
import { MIS_PERIODOS_LECTIVOS } from './queries';

const LOGIN = gql`
  query login($username: String!, $password: String!) {
    appPersonas {
      login(username: $username, password: $password) {
        username
        roles
        persona {
          id
          identificacion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private currentUser: User;

  constructor(private apollo: Apollo) { }

  public async login(user: User) {
    const watch = await this.apollo.watchQuery({
      query: LOGIN,
      variables: {
        username: user.username,
        password: user.password
      },
      fetchPolicy: "network-only"
    });

    const result = (await watch.result()).data["appPersonas"]["login"];
    console.log(result);
    this.LOGIN(result);
    return result;
  }

  private LOGIN(user: User): void {
    if (user != null) {
      user.loggedIn = true;
      localStorage.setItem("currentUser", JSON.stringify(user));
    }
  }

  public LOGOUT() {
    localStorage.setItem("currentUser", null);
    this.currentUser = null;
  }

  public getUserLoggedIn() {
    if (this.currentUser == null) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    return this.currentUser;
  }

  public getRoles() {
    return this.getUserLoggedIn().roles
  }

  public hasRole(rolName: string) {
    const result = this.getRoles().filter(item => item === rolName)
    if (result.length > 0) {
      return true;
    }
    return false;
  }

  public async getPeriodos() {

    let rol = ""

    if (this.hasRole("ALUMNO")) {
      rol = "ALUMNO"
    } else if (this.hasRole("DOCENTE")) {
      rol = "DOCENTE"
    } else if (this.hasRole("COORDINADOR")) {
      rol = "COORDINADOR"
    }

    const query = await this.apollo.query({
      query: MIS_PERIODOS_LECTIVOS,
      variables: {
        cedula: this.getUserLoggedIn().persona.identificacion,
        rol: rol
      }
    });


    const promise = await query.toPromise()

    return promise.data['appNotas']['periodos']

  }


}
