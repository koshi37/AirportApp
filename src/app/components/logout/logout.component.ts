import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AutenticationService } from "src/app/services/login/autentication.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(
    private authentocationService: AutenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(["login"]);
  }
}
