import { OnInit, Component } from '@angular/core';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private userSrv: UsersService
  ) { }

  ngOnInit() {
  }

}
