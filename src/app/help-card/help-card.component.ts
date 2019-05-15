import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-help-card",
  templateUrl: "./help-card.component.html",
  styleUrls: ["./help-card.component.scss"]
})
export class HelpCardComponent implements OnInit {
  cardContent: any;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.getdatas();
  }

  getdatas() {
    return this.data.getData().subscribe((datas: any) => {
      this.cardContent = datas;
      console.log(this.cardContent);
    });
  }
}
