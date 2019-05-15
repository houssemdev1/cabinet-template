import { Component, OnInit, Input, Output } from "@angular/core";
import { StepsService } from "../steps.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  template: ``,
  selector: "app-header-step",
  templateUrl: "./header-step.component.html",
  styleUrls: ["./header-step.component.scss"]
})
export class HeaderStepComponent implements OnInit {
  constructor(
    private data: StepsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  steps = this.data.steps;

  @Input() step = 1;

  ngOnInit() {}
  /*
  getdatas() {
    return this.data.getData().subscribe((datas: any) => {
      this.steps = datas.steps;
      console.log(this.steps);
    });
  }
  */
}
