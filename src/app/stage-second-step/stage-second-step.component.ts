import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-stage-second-step",
  templateUrl: "./stage-second-step.component.html",
  styleUrls: ["./stage-second-step.component.scss"]
})
export class StageSecondStepComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {}

  nextStep() {
    this.router.navigate(["/etape3/etape3-3"]);
  }
}
