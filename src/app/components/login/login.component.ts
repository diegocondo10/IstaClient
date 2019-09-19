import { Component, OnInit, Host } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public user: User = {}

  constructor(
    private userSrv: UsersService,
    private router: Router,
    @Host() private app: AppComponent
  ) { }

  async ngOnInit() {
    this.app.bottonName = 'Iniciar Sesion';
  }

  async login() {

    let user = await this.userSrv.login(this.user);
    if (user != null) {
      this.router.navigate(['home'])
      this.app.bottonName = "Cerrar Sesion"
    } else {
      console.log("NO SE HA ENCONTRADO ESE USUARIO");
    }

  }

}
