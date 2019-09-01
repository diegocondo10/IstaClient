import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { FichaSalud } from '../../../../models/ficha-salud';
import { FichaSaludService } from '../../../../services/ficha-salud.service';
import { User } from '../../../../models/user';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  public ficha: Observable<ApolloQueryResult<FichaSalud>>;
  private user: User;

  constructor(
    private fichaSrv: FichaSaludService,
    private userSrv: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUserLoggedIn();
    this.ficha = this.fichaSrv.findFichaByPersonaID(this.user.persona.id)
  }

  ngOnDestroy() {

    this.ficha

  }

}
