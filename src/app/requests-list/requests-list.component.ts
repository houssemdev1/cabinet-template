import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-requests-list",
  templateUrl: "./requests-list.component.html",
  styleUrls: ["./requests-list.component.scss"]
})
export class RequestsListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  routing() {
    this.router.navigateByUrl("/platforme/demandes");
  }
}
