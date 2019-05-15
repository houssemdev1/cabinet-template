import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { StepsService } from "../steps.service";

@Component({
  selector: "app-characteristics-third-step",
  templateUrl: "./characteristics-third-step.component.html",
  styleUrls: ["./characteristics-third-step.component.scss"]
})
export class CharacteristicsThirdStepComponent implements OnInit {
  constructor(private data: StepsService, private router: Router) {}
  ngOnInit() {}
  nextStep() {
    this.router.navigate(["/etape3/etape3-1"]);
  }
}
