import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profesional-informations",
  templateUrl: "./profesional-informations.component.html",
  styleUrls: ["./profesional-informations.component.scss"]
})
export class ProfesionalInformationsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
   
  }
  Routing(){
    this.router.navigateByUrl("/dashboard");
  }
}
