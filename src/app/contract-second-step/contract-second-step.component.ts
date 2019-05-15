import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-contract-second-step",
  templateUrl: "./contract-second-step.component.html",
  styleUrls: ["./contract-second-step.component.scss"]
})
export class ContractSecondStepComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {}
  nextStep() {
    this.router.navigate(["/etape5/etape5-1"]);
  }
}
