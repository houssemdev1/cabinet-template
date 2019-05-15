import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { CompletProfilComponent } from "./complet-profil/complet-profil.component";
import { AddCabinetComponent } from "./add-cabinet/add-cabinet.component";
import { CabinetCreationComponent } from "./cabinet-creation/cabinet-creation.component";
import { StageFirstStepComponent } from "./stage-first-step/stage-first-step.component";
import { CharacteristicsStepComponent } from "./characteristics-step/characteristics-step.component";
import { CharacteristicsSecondStepComponent } from "./characteristics-second-step/characteristics-second-step.component";
import { CharacteristicsThirdStepComponent } from "./characteristics-third-step/characteristics-third-step.component";
import { StageThirdStepComponent } from "./stage-third-step/stage-third-step.component";
import { StageFourthStepComponent } from "./stage-fourth-step/stage-fourth-step.component";
import { StageSecondStepComponent } from "./stage-second-step/stage-second-step.component";
import { ContractStepComponent } from "./contract-step/contract-step.component";
import { ContractSecondStepComponent } from "./contract-second-step/contract-second-step.component";
import { OrganistionStepComponent } from "./organistion-step/organistion-step.component";

import { NavComponent } from "./nav/nav.component";
import { OrganisationThirdStepComponent } from "./organisation-third-step/organisation-third-step.component";
import { OrganisationFourthStepComponent } from "./organisation-fourth-step/organisation-fourth-step.component";
import { OrganisationFinalStepComponent } from "./organisation-final-step/organisation-final-step.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfilComponent } from "./profil/profil.component";
import { HeaderStepComponent } from "./header-step/header-step.component";
import { GlobalCreationComponent } from "./global-creation/global-creation.component";
import { BlocsComponent } from "./blocs/blocs.component";
import { StageGeneralInformtionsComponent } from "./stage-general-informtions/stage-general-informtions.component";
import { GeneralInformationsComponent } from "./general-informations/general-informations.component";
import { ProfesionalInformationsComponent } from "./profesional-informations/profesional-informations.component";
import { DocumentsComponent } from "./documents/documents.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { PaymentComponent } from "./payment/payment.component";
import { SecurityComponent } from "./security/security.component";
import { ConnectComponent } from "./connect/connect.component";
import { DisplayCabinetComponent } from "./display-cabinet/display-cabinet.component";
import { RequestsListComponent } from "./requests-list/requests-list.component";
import { SecondaryDashboardComponent } from "./secondary-dashboard/secondary-dashboard.component";
import { RequestsComponent } from "./requests/requests.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
const routes: Routes = [
  {
    path: "",
    component: NavComponent
  },
  { path: "creation", component: BlocsComponent },
  { path: "se-connecter", component: ConnectComponent },
  { path: "acceuil", component: NavComponent },

  { path: "apperçu-cabinet", component: DisplayCabinetComponent },

  {
    path: "platforme",
    component: SecondaryDashboardComponent,
    children: [
      //<---- child components declared here
      { path: "liste-demandes", component: RequestsListComponent },
      { path: "demandes", component: RequestsComponent },
      { path: "reservations", component: ReservationComponent }
    ]
  },
  {
    path: "datepicker",
    component: DatepickerComponent
  },
  {
    path: "creation",
    component: BlocsComponent,

    children: [
      //v---- child components declared here
      {
        path: "etape1",
        component: CabinetCreationComponent
      },
      {
        path: "etape2-1",
        component: CharacteristicsStepComponent
      },
      {
        path: "etape2-2",
        component: CharacteristicsSecondStepComponent
      },
      {
        path: "etape2-3",
        component: CharacteristicsThirdStepComponent
      },
      {
        path: "etape3-1",
        component: StageGeneralInformtionsComponent
      },
      {
        path: "etape3-2",
        component: StageFirstStepComponent
      },
      //new route
      {
        path: "etape3-4",
        component: StageGeneralInformtionsComponent
      },

      {
        path: "etape3-3",
        component: StageThirdStepComponent
      },

      {
        path: "etape4-1",
        component: ContractStepComponent
      },

      {
        path: "etape5-1",
        component: OrganistionStepComponent
      },
      {
        path: "etape5-2",
        component: OrganisationFourthStepComponent
      },
      {
        path: "etape5-3",
        component: OrganisationThirdStepComponent
      }
    ]
  },

  {
    path: "etape5-5",
    component: OrganisationFinalStepComponent
  },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "profile",
    component: ProfilComponent,
    children: [
      //<---- child components declared here
      {
        path: "informations-generales",
        component: GeneralInformationsComponent
      },
      {
        path: "informations-professioneles",
        component: ProfesionalInformationsComponent
      },
      {
        path: "documents",
        component: DocumentsComponent
      },
      {
        path: "notifications",
        component: NotificationsComponent
      },
      {
        path: "payement",
        component: PaymentComponent
      },
      {
        path: "securité",
        component: SecurityComponent
      }
    ]
  },
  {
    path: "",
    component: GlobalCreationComponent
  },
  { path: "", component: HeaderStepComponent },
  { path: "login", component: LoginComponent },
  { path: "verifier", component: VerifyEmailComponent },
  { path: "completer", component: CompletProfilComponent },
  { path: "ajout", component: AddCabinetComponent },

  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
