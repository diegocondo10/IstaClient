import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FichaSalud } from '../../../../models/ficha-salud';
import { FichaSaludService } from '../../../../services/ficha-salud.service';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public ficha: FichaSalud;
  private user: User;

  constructor(
    private fichaSrv: FichaSaludService,
    private userSrv: UsersService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.user = this.userSrv.getUserLoggedIn();
    this.ficha = await this.fichaSrv.findFichaByPersonaID(this.user.persona.id)


  }

}
