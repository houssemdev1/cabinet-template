import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-organisation-final-step",
  templateUrl: "./organisation-final-step.component.html",
  styleUrls: ["./organisation-final-step.component.scss"]
})
export class OrganisationFinalStepComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  Routing() {
    this.router.navigateByUrl("/dashboard");
  }
}
