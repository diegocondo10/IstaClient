import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: User;

  constructor(
    private userSrv: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUserLoggedIn() || {
      username: 'ANONIMO',
      persona: {
        Foto: ''
      }
    };
    if (this.user.username == 'ANONIMO') {
      this.router.navigate(['login']);
    }
  }

}
