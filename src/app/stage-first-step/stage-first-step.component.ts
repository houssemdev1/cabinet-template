import { Component, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-stage-first-step",
  templateUrl: "./stage-first-step.component.html",
  styleUrls: ["./stage-first-step.component.scss"]
})
export class StageFirstStepComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {}

  nextStep() {
    this.router.navigate(["/etape3/etape3-2"]);
  }
}
