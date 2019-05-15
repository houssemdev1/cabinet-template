import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-blocs",
  templateUrl: "./blocs.component.html",
  styleUrls: ["./blocs.component.scss"]
})
export class BlocsComponent implements OnInit {
  @Input() progress_value = 10;
  constructor(private router: Router) {}

  headerstep = 0;
  countNextbloc(level: number) {
    this.headerstep++;
    this.progress_value += 25;

    console.log("active", level);
  }
  countBackbloc(level: number) {
    console.log("active", level);
    this.headerstep--;
    this.progress_value -= 25;
    this.ngOnInit();
  }
  ngOnInit() {}
}
