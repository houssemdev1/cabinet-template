import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.scss"]
})
export class RequestsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  routing() {
    this.router.navigateByUrl("/platforme/liste-demandes");
  }
}
