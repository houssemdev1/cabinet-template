import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StepsService } from "../steps.service";

@Component({
  selector: "app-footer-steps",
  templateUrl: "./footer-steps.component.html",
  styleUrls: ["./footer-steps.component.scss"]
})
export class FooterStepsComponent implements OnInit {
  subscription: Subscription;
  @Output() changeN: EventEmitter<number> = new EventEmitter<number>();
  @Output() changeB: EventEmitter<number> = new EventEmitter<number>();
  level = 1;
  isDesableNext = 1;
  isDesableBack = 0;
  levelEvent = 1;
  currentStep = 1;
  constructor(private router: Router, private data: StepsService) {}

  ngOnInit() {
    // this.router.navigate(["/creation/etape3-5"]);
  }

  //***************************************************************************************** */
  changeNext() {
    this.level++;
    this.changeN.emit(this.levelEvent++);
    console.log("emit", this.levelEvent);
  }
  changeBack() {
    this.level--;
    this.changeB.emit(this.levelEvent--);
    console.log("emit", this.levelEvent);
  }

  nextStep() {
    switch (this.level) {
      case 1: {
        this.isDesableBack = 1;
        this.router.navigate(["/creation/etape2-1"]);
        this.changeNext();
        console.log("level is====>", this.level);
        break;
      }
      //step==2
      case 2: {
        this.level++;
        this.router.navigate(["/creation/etape2-2"]);
        break;
      }

      case 3: {
        this.level++;
        this.router.navigate(["/creation/etape2-3"]);
        break;
      }

      case 4: {
        this.router.navigate(["/creation/etape3-1"]);
        this.changeNext();
        break;
      }

      //step==3
      case 5: {
        this.level++;
        this.router.navigate(["/creation/etape3-2"]);
        break;
      }
      case 6: {
        this.level++;
        this.router.navigate(["/creation/etape3-3"]);
        break;
      }
      case 7: {
        this.level++;
        this.router.navigate(["/creation/etape3-4"]);
        break;
      }
      case 8: {
        this.router.navigate(["/creation/etape4-1"]);
        this.changeNext();
        break;
      }

      //step==4
      case 9: {
        this.router.navigate(["/creation/etape5-1"]);
        this.changeNext();
        break;
      }

      case 10: {
        this.level++;
        this.router.navigate(["/creation/etape5-2"]);
        break;
      }
      case 11: {
        this.level++;
        this.router.navigate(["/creation/etape5-3"]);
        break;
      }
      case 12: {
        this.level++;
        this.router.navigate(["/etape5-5"]);
        console.log(this.currentStep);
        break;
      }

      default: {
        console.log("errreur");
        break;
      }
    }
  }
  backStep() {
    switch (this.level) {
      case 2: {
        this.changeBack();
        this.isDesableBack = 0;
        this.level = 1;
        this.router.navigate(["/creation/etape1"]);
        break;
      }
      //step==2
      case 2: {
        //this.level--;
        this.level--;
        this.router.navigate(["/creation/etape2-1"]);

        break;
      }
      case 3: {
        this.level--;
        this.router.navigate(["/creation/etape2-2"]);
        break;
      }
      case 4: {
        //  this.level--;

        this.router.navigate(["/creation/etape2-3"]);
        this.changeBack();
        break;
      }
      //step==3
      case 5: {
        // this.level--;
        this.level--;
        this.router.navigate(["/creation/etape3-1"]);

        break;
      }
      case 6: {
        this.level--;
        this.router.navigate(["/creation/etape3-2"]);
        break;
      }
      case 7: {
        this.level--;
        this.router.navigate(["/creation/etape3-3"]);
        break;
      }
      case 8: {
        //  this.level--;

        this.router.navigate(["/creation/etape3-4"]);
        this.changeBack();
        break;
      }
      //step==4
      case 9: {
        this.level--;
        this.router.navigate(["/creation/etape4-1"]);
        break;
      }
      case 10: {
        this.changeBack();
        this.router.navigate(["/creation/etape4-2"]);
        break;
      }
      case 11: {
        //   this.level--;
        this.level--;
        this.router.navigate(["/creation/etape5-1"]);

        break;
      }
      case 12: {
        this.level--;
        this.router.navigate(["/creation/etape5-2"]);
        break;
      }
      case 13: {
        this.level--;
        this.router.navigate(["/creation/etape5-3"]);
        break;
      }
      default: {
        console.log("errreur");
        break;
      }
    }
  }
}
