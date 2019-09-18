import { Component, OnInit, Host } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {


  public usuario: User = this.default()

  constructor(
    private userSrv: UsersService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.usuario = this.userSrv.getUserLoggedIn() || this.default()
  }

  default() {
    return {
      username: '',
      password: '',
      loggedIn: false
    }
  }

  async login() {

    let user = await this.userSrv.login(this.usuario);
    if (user != null) {
      this.router.navigate(['dashboard'])
    } else {
      console.log("NO SE HA ENCONTRADO ESE USUARIO");
    }

  }

  logOut() {

    this.userSrv.LOGOUT()
    this.usuario = this.default()

  }


}
