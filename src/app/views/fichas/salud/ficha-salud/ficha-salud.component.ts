import { Component, OnInit } from '@angular/core';
import { FichaSalud } from '../../../../models/ficha-salud';
import { Subscription } from 'rxjs';
import { User } from '../../../../models/user';
import { UsersService } from '../../../../services/users.service';
import { Router } from '@angular/router';
import { FichaSaludService } from '../../services/ficha-salud.service';
import { SeccionFS } from '../../../../models/seccion-ficha-salud';

@Component({
  selector: 'app-ficha-salud',
  templateUrl: './ficha-salud.component.html',
  styleUrls: ['./ficha-salud.component.scss']
})
export class FichaSaludComponent implements OnInit {

  public ficha: FichaSalud;
  private subscriptions: Subscription[] = []
  private user: User;

  public loading: boolean

  constructor(
    private fichaSrv: FichaSaludService,
    private userSrv: UsersService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.user = await this.userSrv.getUserLoggedIn();

    const fichaSub = this.fichaSrv.findFichaByPersonaID(this.user.persona.id)
      .subscribe(({ data, loading }) => {
        this.loading = loading
        this.ficha = data['ficha']

        this.ficha.seccionfsSet.sort(function (item1: SeccionFS, item2: SeccionFS) {
          if (item1.seccionNombre.id < item2.seccionNombre.id) {
            return -1
          }
          if (item1.seccionNombre.id > item2.seccionNombre.id) {
            return 1
          }
          return 0
        })
      });



    this.subscriptions.push(fichaSub)

  }

  ngOnDestroy() {
    this.subscriptions.forEach(obj => obj.unsubscribe())
  }

  btnConfirmar() {
    this.fichaSrv.confirmarFicha(this.ficha.id, "CONFIRMADO")
    this.router.navigate(['ficha-confirm'])
  }

}
