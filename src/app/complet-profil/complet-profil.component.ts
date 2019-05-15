import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complet-profil',
  templateUrl: './complet-profil.component.html',
  styleUrls: ['./complet-profil.component.scss']
})
export class CompletProfilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  routing(){
    this.router.navigateByUrl("/ajout")
  }
}
