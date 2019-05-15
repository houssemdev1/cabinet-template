import { Component, OnInit } from "@angular/core";
import { StepsService } from "../steps.service";

@Component({
  selector: "app-global-creation",
  templateUrl: "./global-creation.component.html",
  styleUrls: ["./global-creation.component.scss"]
})
export class GlobalCreationComponent implements OnInit {

  step: number = 2;
  constructor(private data: StepsService) {}

  ngOnInit() {}
}

/*
  getdatas() {
    return this.data.getData().subscribe((datas: any) => {
      this.cardContent = datas;
      console.log(this.cardContent);
    });
  }
  */