import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: User;
  public bottonName = "Login";
  public showNav: boolean = false;

  constructor(
    private userSrv: UsersService,
    private router: Router
  ) { }

  async ngOnInit() {

    this.user = this.userSrv.getUserLoggedIn() || new User();
    if (this.user.username == null) {
      this.bottonName = "Iniciar Sesion"
      this.showNav = false
    } else {
      this.bottonName = "Cerrar Sesion"
      this.showNav = true
    }

  }

  Login() {
    if (this.bottonName = "Cerrar Sesion") {
      console.log("HOLA MUNDO");
      this.userSrv.LOGOUT()
      window.location.reload();
    }
  }



}
