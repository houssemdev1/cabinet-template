import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-stage-fourth-step",
  templateUrl: "./stage-fourth-step.component.html",
  styleUrls: ["./stage-fourth-step.component.scss"]
})
export class StageFourthStepComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {}
  routing() {
    this.router.navigateByUrl("/etape4-1");
  }
}
