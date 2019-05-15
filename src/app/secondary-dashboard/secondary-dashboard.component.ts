import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-secondary-dashboard",
  templateUrl: "./secondary-dashboard.component.html",
  styleUrls: ["./secondary-dashboard.component.scss"]
})
export class SecondaryDashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigateByUrl("/platforme/liste-demandes");
  }
}
