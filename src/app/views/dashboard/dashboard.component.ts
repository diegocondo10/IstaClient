import { OnInit, Component } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public user: User;

  constructor(private userSrv: UsersService) {}

  ngOnInit() {
    this.user = this.userSrv.getUserLoggedIn();
  }
}
