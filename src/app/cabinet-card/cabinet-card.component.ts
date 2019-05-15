import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cabinet-card',
  templateUrl: './cabinet-card.component.html',
  styleUrls: ['./cabinet-card.component.scss']
})
export class CabinetCardComponent implements OnInit {
  cardContent: any;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.getdatas();
  }

  getdatas() {
    return this.data.getData().subscribe((datas: any) => {
      this.cardContent = datas;
      console.log(this.cardContent)
    });
  }
}

