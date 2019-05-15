import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { StepsService } from "../steps.service";

@Component({
  selector: "app-characteristics-second-step",
  templateUrl: "./characteristics-second-step.component.html",
  styleUrls: ["./characteristics-second-step.component.scss"]
})
export class CharacteristicsSecondStepComponent implements OnInit {
  equipments = [
    {
      name: "Table de bureau",
      icon: "table_bureau1.svg",
      status: "deactive"
    },
    {
      name: "Table de bureau",
      icon: "table_bureau2.svg",
      status: "deactive"
    },
    {
      name: "Table de bureau",
      icon: "table_bureau3.svg",
      status: "deactive"
    },

    {
      name: "Table de bureau",
      icon: "table_bureau4.svg",
      status: "deactive"
    },
    {
      name: "Table de bureau",
      icon: "table_bureau5.svg",
      status: "deactive"
    }
  ];

  interdications = [
    {
      name: " Table",
      icon: "table1.svg",
      status: "deactive"
    },
    {
      name: " Table",
      icon: "table2.svg",
      status: "deactive"
    },
    {
      name: " Table",
      icon: "table3.svg",
      status: "deactive"
    },

    {
      name: " Table",
      icon: "table4.svg",
      status: "deactive"
    }
  ];
  constructor() {}
  equipementChoice(choice) {
    if (this.equipments[choice].status === "deactive")
      this.equipments[choice].status = "active";
    else this.equipments[choice].status = "deactive";
  }
  interdicationChoice(choice) {
    if (this.interdications[choice].status === "deactive")
      this.interdications[choice].status = "active";
    else this.interdications[choice].status = "deactive";
  }

  ngOnInit() {}
}
