import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { StepsService } from "../steps.service";

@Component({
  selector: "app-characteristics-step",
  templateUrl: "./characteristics-step.component.html",
  styleUrls: ["./characteristics-step.component.scss"]
})
export class CharacteristicsStepComponent implements OnInit {
  externalProfs = [
    {
      name: "Accée handicapé",
      icon: "Chair1.svg",
      status: "deactive"
    },
    {
      name: "Parking",
      icon: "Mailbox.svg",
      status: "deactive"
    },
    {
      name: " Ascenseur",
      icon: "Ladder.svg",
      status: "deactive"
    },

    {
      name: "Voletde sécurité",
      icon: "Gas-stove.svg",
      status: "deactive"
    },
    {
      name: "Cupboard.svg",
      icon: "Air-conditioning.svg",
      status: "deactive"
    }
  ];

  internalProfs = [
    {
      name: "Salle D’attente",
      icon: "Armchair.svg",
      status: "deactive"
    },
    {
      name: "Table de bureau",
      icon: "Commode1.svg",
      status: "deactive"
    },
    {
      name: " Point D’eau",
      icon: "Water-mixer.svg",
      status: "deactive"
    },

    {
      name: "Cuisine",
      icon: "Gas-stove.svg",
      status: "deactive"
    },
    {
      name: "Chauffage",
      icon: "Air-conditioning.svg",
      status: "deactive"
    },
    {
      name: "Toilette",
      icon: "Air-conditioning.svg",
      status: "deactive"
    }
  ];
  constructor() {}
  internalChoice(choice) {
    if (this.internalProfs[choice].status == "deactive")
      this.internalProfs[choice].status = "active";
    else this.internalProfs[choice].status = "deactive";
  }
  externalChoice(choice) {
    if (this.externalProfs[choice].status == "deactive")
      this.externalProfs[choice].status = "active";
    else this.externalProfs[choice].status = "deactive";
  }
  ngOnInit() {

  }
}
