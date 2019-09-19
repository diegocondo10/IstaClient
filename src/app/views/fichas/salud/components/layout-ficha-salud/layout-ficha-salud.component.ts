import { OnInit, Component } from '@angular/core';
import { FichaSalud } from '../../../../../models/ficha-salud';
import { Subscription } from 'rxjs';
import { User } from '../../../../../models/user';
import { FichaSaludService } from '../../../services/ficha-salud.service';
import { UsersService } from '../../../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-ficha-salud',
  templateUrl: './layout-ficha-salud.component.html',
  styleUrls: ['./layout-ficha-salud.component.css']
})
export class LayoutFichaSaludComponent implements OnInit {

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
      .subscribe(({ data }) => {
        this.ficha = data['ficha']
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
