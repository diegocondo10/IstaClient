import { OnInit, Component } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;

  constructor(
    private userSrv: UsersService,
  ) { }

  ngOnInit() {
    this.user = this.userSrv.getUserLoggedIn();
  }

}
