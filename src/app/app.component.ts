import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private userSrv: UsersService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loginRequired()
  }

  public loginRequired(): boolean {
    const user = this.userSrv.getUserLoggedIn();
    if (user == null) {
      this.router.navigate(['login'])
      return true;
    }
    return false;
  }

}
