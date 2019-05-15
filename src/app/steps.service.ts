import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StepsService {
  constructor(private http: HttpClient) {}

  getSteps() {
    return this.http.get("/assets/steps.json");
  }

  step: any;
  data_steps() {
    this.step = this.steps;
  }

  getData() {
    return this.http.get("/assets/steps.json");
  }

  steps = [
    {
      num: "1",
      title: "Étape 1 : Professions cibles",
      subtitle: "Professions à excercer au sein du cabinet"
    },

    {
      num: "2",
      title: "Étape 2 : Caractéristiques",
      subtitle: "Caractéristiques de votre cabinet"
    },
    {
      num: "3",
      title: "Étape 3 : Mettre en scène",
      subtitle: "Informations générales"
    },
    {
      num: "4",
      title: "Étape 4 : Tarifs et contrat",
      subtitle: "Définissez vos tarifs"
    },
    {
      num: "5",
      title: "Étape 5 : Organisez votre calendrier",
      subtitle: "Personailisez la disponibilité de votre cabinet"
    }
  ];
}
