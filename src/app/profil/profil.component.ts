import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"]
})
export class ProfilComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigateByUrl("/profile/informations-generales");
  }
}
