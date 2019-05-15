import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { StepsService } from "../steps.service";

@Component({
  selector: "app-cabinet-creation",
  templateUrl: "./cabinet-creation.component.html",
  styleUrls: ["./cabinet-creation.component.scss"]
})
export class CabinetCreationComponent implements OnInit {
  selectedChoice;
  test; //variable for testing if element to push in choices array is existing in professions array
  choices = []; //array for choices professions

  professions = [
    {
      name: "Psychologue",
      status: "deactive"
    },
    {
      name: "Osteopathe",
      status: "deactive"
    },
    {
      name: "Infirmière",
      status: "deactive"
    },
    {
      name: "Kinésithérapeute",
      status: "deactive"
    },
    {
      name: "Expert comptable",
      status: "deactive"
    },
    {
      name: "Médecin",
      status: "deactive"
    },
    {
      name: " Podologue",
      status: "deactive"
    },

    {
      name: "Chiropracteur",
      status: "deactive"
    },
    {
      name: "Architecte",
      status: "deactive"
    },
    {
      name: "Ophtalmologue",
      status: "deactive"
    },
    {
      name: "Ergothérapeute",
      status: "deactive"
    },
    {
      name: "Avocat",
      status: "deactive"
    }
  ]; //array for all professions //array for all professions
  constructor() {}
  //function for displaying choices professions

  testing(choice) {
    if (this.professions[choice].status === "deactive") {
      this.professions[choice].status = "active";
      this.choices.push(this.professions[choice]);
    } else this.professions[choice].status = "deactive";
    for (let item of this.professions) {
      if (
        item === this.professions[choice] &&
        this.professions[choice].status === "deactive"
      ) {
        const index: number = this.choices.indexOf(item);
        if (index !== -1) {
          this.choices.splice(index, 1);
        }
      }
    }
  }

  ngOnInit() {}
}
