import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-general-informations",
  templateUrl: "./general-informations.component.html",
  styleUrls: ["./general-informations.component.scss"]
})
export class GeneralInformationsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  Routing() {
    this.router.navigateByUrl("/dashboard");
  }
}
