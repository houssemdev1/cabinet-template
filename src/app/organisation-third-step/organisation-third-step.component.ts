import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-organisation-third-step",
  template: ``,
  templateUrl: "./organisation-third-step.component.html",
  styleUrls: ["./organisation-third-step.component.scss"]
})
export class OrganisationThirdStepComponent implements OnInit {
  Morningsession_Mon: boolean = true;
  Morningsession_Tue: boolean = true;
  Morningsession_Wed: boolean = true;
  Morningsession_Thu: boolean = true;
  Morningsession_Fri: boolean = true;
  Morningsession_Sun: boolean = true;
  Morningsession_Sat: boolean = true;
  //midday session declaration
  Middaysession_Mon: boolean = true;
  Middaysession_Tue: boolean = true;
  Middaysession_Wed: boolean = true;
  Middaysession_Thu: boolean = true;
  Middaysession_Fri: boolean = true;
  Middaysession_Sun: boolean = true;
  Middaysession_Sat: boolean = true;

  constructor(private data: DataService, private router: Router) {

  }
  ngOnInit() {}
  Routing() {

    this.router.navigateByUrl("/etape5-4");
  }
  //morning session functions
  morningSession_Mon() {
    if (this.Morningsession_Mon) this.Morningsession_Mon = false;
    else this.Morningsession_Mon = true;
  }

  morningSession_Tue() {
    if (this.Morningsession_Tue) this.Morningsession_Tue = false;
    else this.Morningsession_Tue = true;
  }
  morningSession_Wed() {
    if (this.Morningsession_Wed) this.Morningsession_Wed = false;
    else this.Morningsession_Wed = true;
  }
  morningSession_Thu() {
    if (this.Morningsession_Thu) this.Morningsession_Thu = false;
    else this.Morningsession_Thu = true;
  }
  morningSession_Fri() {
    if (this.Morningsession_Fri) this.Morningsession_Fri = false;
    else this.Morningsession_Fri = true;
  }
  morningSession_Sat() {
    if (this.Morningsession_Sat) this.Morningsession_Sat = false;
    else this.Morningsession_Sat = true;
  }
  morningSession_Sun() {
    if (this.Morningsession_Sun) this.Morningsession_Sun = false;
    else this.Morningsession_Sun = true;
  }
  //midday session functions
  middaySession_Mon() {
    if (this.Middaysession_Mon) this.Middaysession_Mon = false;
    else this.Middaysession_Mon = true;
  }
  middaySession_Tue() {
    if (this.Middaysession_Tue) this.Middaysession_Tue = false;
    else this.Middaysession_Tue = true;
  }
  middaySession_Wed() {
    if (this.Middaysession_Wed) this.Middaysession_Wed = false;
    else this.Middaysession_Wed = true;
  }
  middaySession_Thu() {
    if (this.Middaysession_Thu) this.Middaysession_Thu = false;
    else this.Middaysession_Thu = true;
  }
  middaySession_Fri() {
    if (this.Middaysession_Fri) this.Middaysession_Fri = false;
    else this.Middaysession_Fri = true;
  }
  middaySession_Sat() {
    if (this.Middaysession_Sat) this.Middaysession_Sat = false;
    else this.Middaysession_Sat = true;
  }
  middaySession_Sun() {
    if (this.Middaysession_Sun) this.Middaysession_Sun = false;
    else this.Middaysession_Sun = true;
  }
}
