import { Component, OnInit, Host } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

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
  ) { }

  async ngOnInit() {
  }

  async login() {

    let user: User = await this.userSrv.login(this.user);
    if (user != null) {
      this.router.navigate(['dash'])
    }

  }

}
