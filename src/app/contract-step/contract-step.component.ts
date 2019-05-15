import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { coerceNumberProperty } from "@angular/cdk/coercion";
import "hammerjs";
@Component({
  selector: "app-contract-step",
  templateUrl: "./contract-step.component.html",
  styleUrls: ["./contract-step.component.scss"]
})
export class ContractStepComponent implements OnInit {
  modify: boolean = false;
  constructor(private data: DataService, private router: Router) {}
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  second_max = 100;
  second_min = 0;
  second_showTicks = false;
  second_step = 1;
  second_thumbLabel = false;
  second_value = 0;
  second_vertical = false;

  get tickInterval(): number | "auto" {
    return this.showTicks ? (this.autoTicks ? "auto" : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  get stickInterval(): number | "auto" {
    return this.showTicks ? (this.autoTicks ? "auto" : this._stickInterval) : 0;
  }
  set stickInterval(second_value) {
    this._stickInterval = coerceNumberProperty(second_value);
  }
  private _stickInterval = 1;
  ngOnInit() {}

  nextStep() {
    this.router.navigate(["/etape4/etape4-2"]);
  }
  go() {
    this.modify = true;
    console.log(this.modify);
  }
}
