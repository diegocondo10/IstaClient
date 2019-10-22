import { Component, OnInit } from '@angular/core';
import { PeriodoLectivo } from '../../views/calendario-acad/models/calendario-models';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dash-components',
  templateUrl: './dash-components.component.html',
  styleUrls: ['./dash-components.component.css']
})
export class DashComponentsComponent implements OnInit {

  public periodos: PeriodoLectivo[]

  constructor(
    public userSrv: UsersService
  ) { }

  async ngOnInit() {
    this.periodos = await this.userSrv.getPeriodos()
  }

}
