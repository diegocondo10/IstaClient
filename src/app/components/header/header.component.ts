import { Component, OnInit, Input } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public user: User;
  @Input() bottonName: string;

  constructor(private userSrv: UsersService, private router: Router) {}

  async ngOnInit() {
    this.user = this.userSrv.getUserLoggedIn();
  }

  logOut() {
    this.userSrv.LOGOUT();
    this.router.navigate(["login"]);
  }
}
