import { Component, OnInit } from '@angular/core';
import { SaludService } from './services/salud.service';
import { UsersService } from '../../../../services/users.service';
import { FormGroup } from '@angular/forms';
import { SeccionFs, PersonaFs } from '../../../../models/appFichas';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {


  public ficha: Observable<SeccionFs[]>
  public personaFs: PersonaFs

  public form: FormGroup = new FormGroup({})

  constructor(
    private srv: SaludService,
    private userSrv: UsersService
  ) { }

  async ngOnInit() {
    this.ficha = this.srv.buscarFichaSalud(this.userSrv.getUserLoggedIn().persona.id)
      .pipe(
        map(({ data }) => data['appFs']['fichaSalud'])
      )
  }

}
