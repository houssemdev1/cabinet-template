import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-cabinet",
  templateUrl: "./add-cabinet.component.html",
  styleUrls: ["./add-cabinet.component.scss"]
})
export class AddCabinetComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  routing() {
    this.router.navigateByUrl("/creation/etape1");
  }
}
