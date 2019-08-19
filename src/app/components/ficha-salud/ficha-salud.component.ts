import { Component, OnInit } from '@angular/core';
import { FichaSalud } from '../../models/ficha-salud';
import { FichaSaludService } from '../../services/ficha-salud.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-ficha-salud',
  templateUrl: './ficha-salud.component.html',
  styleUrls: ['./ficha-salud.component.css']
})
export class FichaSaludComponent implements OnInit {

  public ficha: FichaSalud
  public user: User

  constructor(
    private fichaSrv: FichaSaludService,
    private userSrv: UsersService
  ) { }

  async ngOnInit() {
    this.user = this.userSrv.getUserLoggedIn();
    this.ficha = await this.fichaSrv.buscarFicha(this.user.persona.id);
    console.log(this.ficha);

  }

}
