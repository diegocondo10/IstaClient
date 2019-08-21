import { Component, OnInit, Input } from '@angular/core';
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
  @Input() bottonName: string;
  public showNav: boolean = false;

  constructor(
    private userSrv: UsersService,
    private router: Router
  ) { }

  async ngOnInit() {


  }

  Login() {

    this.userSrv.LOGOUT()
    this.router.navigate(['login'])
    this.bottonName = "Iniciar Sesion"

  }



}
