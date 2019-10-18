import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user: User = {};

  constructor(private userSrv: UsersService, private router: Router) {}

  async ngOnInit() {}

  async login() {
    let user = await this.userSrv.login(this.user);
    if (user != null) {
      this.router.navigate(["dash"]);
    }
  }
}
