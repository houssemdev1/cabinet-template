import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-target-profession',
  templateUrl: './target-profession.component.html',
  styleUrls: ['./target-profession.component.scss']
})
export class TargetProfessionComponent implements OnInit {

  constructor(private data:DataService,private router:Router) {



}
  ngOnInit() {
  }
  routing(){

    this.router.navigateByUrl("/etape2-1")
  }
}

