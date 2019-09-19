import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public bottonName: string = 'Cerrar Sesion';
  
  constructor(
    private userSrv: UsersService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loginRequired()
  }

  public loginRequired(): boolean {
    console.log("LOGIN REQUIRED")
    const user = this.userSrv.getUserLoggedIn();
    if (user == null) {
      this.router.navigate(['login'])
      return true;
    }
    return false;
  }

}
