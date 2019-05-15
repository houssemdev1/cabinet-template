import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
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
