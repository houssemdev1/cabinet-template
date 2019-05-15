import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  @Output() level = 1;
  subStep = 1;
  constructor(private router: Router) {}

  ngOnInit() {}

  nextStep(level) {
    this.level++;
    switch (level) {
      case 1: {
        this.router.navigate["/etape1"];
        break;
      }
      case 2: {
        switch (this.subStep) {
          case 1: {
            this.subStep++;
            this.router.navigate["/etape2/etape2-1"];
            break;
          }
          case 2: {
            this.subStep++;
            this.router.navigate["/etape2/etape2-2"];
            break;
          }
          case 3: {
            level++;
            this.subStep = 1;
            this.router.navigate["/etape2/etape2-3"];
            break;
          }
        }

        break;
      }
      case 3: {
        switch (this.subStep) {
          case 1: {
            this.subStep++;
            this.router.navigate["/etape3/etape3-1"];
            break;
          }
          case 2: {
            this.subStep++;
            this.router.navigate["/etape3/etape3-2"];
            break;
          }
          case 3: {
            this.subStep++;
            this.router.navigate["/etape3/etape3-3"];
            break;
          }
          case 4: {
            this.subStep = 1;
            level++;
            this.router.navigate["/etape3/etape3-4"];
            break;
          }
        }
        break;
      }
      case 4: {
        switch (this.subStep) {
          case 1: {
            this.subStep++;
            this.router.navigate["/etape4/etape4-1"];
            break;
          }
          case 2: {
            level++;
            this.subStep = 1;
            this.router.navigate["/etape4/etape4-2"];
            break;
          }
        }

        break;
      }
      case 5: {
        switch (this.subStep) {
          case 1: {
            this.subStep++;
            this.router.navigate["/etape5/etape5-1"];
            break;
          }
          case 2: {
            this.subStep++;
            this.router.navigate["/etape4/etape5-2"];
            break;
          }
          case 3: {
            this.subStep++;
            this.router.navigate["/etape5/etape5-3"];
            break;
          }
          case 4: {
            this.subStep++;
            this.router.navigate["/etape5/etape5-4"];
            break;
          }
        }

        break;
      }
      default: {
        console.log("errreur");
        break;
      }
    }
  }
}
