import { Component, OnInit } from '@angular/core';
import { SaludService } from './services/salud.service';
import { UsersService } from '../../../../services/users.service';
import { Observable } from 'rxjs';
import { FichaSalud } from '../../../../models/ficha-salud';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {


  public ficha: Observable<FichaSalud>

  public form: FormGroup = new FormGroup({})

  constructor(
    private srv: SaludService,
    private userSrv: UsersService
  ) { }

  async ngOnInit() {

    this.ficha = this.srv.findFichaByPersonaID(this.userSrv.getUserLoggedIn().persona.id)
      .valueChanges
      .pipe(map(({ data }) => data['ficha'] as FichaSalud))



  }

}
