import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ChangeDetectorRef } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./panel-footer/footer.component";
import { TestimonyComponent } from "./testimony/testimony.component";
import { FooterPageComponent } from "./footer-page/footer-page.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HelpCardComponent } from "./help-card/help-card.component";
import { CabinetCardComponent } from "./cabinet-card/cabinet-card.component";
import { OptionCardComponent } from "./option-card/option-card.component";
import { LoginComponent } from "./login/login.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { CompletProfilComponent } from "./complet-profil/complet-profil.component";
import { AddCabinetComponent } from "./add-cabinet/add-cabinet.component";
import { CabinetCreationComponent } from "./cabinet-creation/cabinet-creation.component";
import { TargetProfessionComponent } from "./target-profession/target-profession.component";
import { CharacteristicsStepComponent } from "./characteristics-step/characteristics-step.component";
import { CharacteristicsSecondStepComponent } from "./characteristics-second-step/characteristics-second-step.component";
import { CharacteristicsThirdStepComponent } from "./characteristics-third-step/characteristics-third-step.component";
import { StageFirstStepComponent } from "./stage-first-step/stage-first-step.component";
import { StageSecondStepComponent } from "./stage-second-step/stage-second-step.component";
import { StageThirdStepComponent } from "./stage-third-step/stage-third-step.component";
import { StageFourthStepComponent } from "./stage-fourth-step/stage-fourth-step.component";
import { AgmCoreModule } from "@agm/core/core.module";
import { ContractStepComponent } from "./contract-step/contract-step.component";
import { ContractSecondStepComponent } from "./contract-second-step/contract-second-step.component";
import { FooterStepsComponent } from "./footer-steps/footer-steps.component";
import { OrganistionStepComponent } from "./organistion-step/organistion-step.component";

import { OrganisationThirdStepComponent } from "./organisation-third-step/organisation-third-step.component";
import {
  OrganisationFourthStepComponent,
  ExampleHeader
} from "./organisation-fourth-step/organisation-fourth-step.component";
import { FullCalendarModule } from "ng-fullcalendar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import {
  CalendarModule,
  CalendarCommonModule,
  CalendarDayModule,
  CalendarMonthModule,
  CalendarWeekModule
} from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { OrganisationFinalStepComponent } from "./organisation-final-step/organisation-final-step.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardNavComponent } from "./dashboard-nav/dashboard-nav.component";
import { ProfilComponent } from "./profil/profil.component";
import { HeaderStepComponent } from "./header-step/header-step.component";
import { GlobalCreationComponent } from "./global-creation/global-creation.component";
import { BlocsComponent } from "./blocs/blocs.component";
import { StageGeneralInformtionsComponent } from "./stage-general-informtions/stage-general-informtions.component";
import { DateFormat } from "./date-format";
import {
  MatDatepickerModule,
  MatNativeDateModule,
  DateAdapter
} from "@angular/material";
import {
  MatSliderModule,
  MatIconModule,
  MatCalendar,
  MatMenuModule,
  MatProgressBarModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FileUploadModule } from "ng2-file-upload";
import {
  MatFormFieldModule,
  MatCardModule,
  MatInputModule
} from "@angular/material";
import { FileDropModule } from "ngx-file-drop";
import { FileuploadComponent } from "./fileupload/fileupload.component";
import { SmallCalComponent } from "./small-cal/small-cal.component";
import { GeneralInformationsComponent } from "./general-informations/general-informations.component";
import { ProfesionalInformationsComponent } from "./profesional-informations/profesional-informations.component";
import { DocumentsComponent } from "./documents/documents.component";
import { PaymentComponent } from "./payment/payment.component";
import { SecurityComponent } from "./security/security.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { ConnectComponent } from "./connect/connect.component";
import { DisplayCabinetComponent } from "./display-cabinet/display-cabinet.component";
import { NavPreviewComponent } from "./nav-preview/nav-preview.component";
import { RequestsListComponent } from "./requests-list/requests-list.component";
import { GrayNavComponent } from "./gray-nav/gray-nav.component";
import { SecondaryDashboardComponent } from "./secondary-dashboard/secondary-dashboard.component";
import { RequestsComponent } from "./requests/requests.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    TestimonyComponent,
    FooterPageComponent,
    HelpCardComponent,
    CabinetCardComponent,
    OptionCardComponent,
    LoginComponent,
    VerifyEmailComponent,
    CompletProfilComponent,
    AddCabinetComponent,
    CabinetCreationComponent,
    TargetProfessionComponent,
    CharacteristicsStepComponent,
    CharacteristicsSecondStepComponent,
    CharacteristicsThirdStepComponent,
    StageFirstStepComponent,
    StageSecondStepComponent,
    StageThirdStepComponent,
    StageFourthStepComponent,
    ContractStepComponent,
    ContractSecondStepComponent,
    FooterStepsComponent,
    OrganistionStepComponent,

    OrganisationThirdStepComponent,
    OrganisationFourthStepComponent,
    OrganisationFinalStepComponent,
    DashboardComponent,
    DashboardNavComponent,
    ProfilComponent,
    HeaderStepComponent,
    GlobalCreationComponent,
    BlocsComponent,
    StageGeneralInformtionsComponent,
    FileuploadComponent,
    SmallCalComponent,
    GeneralInformationsComponent,
    ProfesionalInformationsComponent,
    DocumentsComponent,
    PaymentComponent,
    SecurityComponent,
    NotificationsComponent,
    ConnectComponent,
    DisplayCabinetComponent,
    NavPreviewComponent,
    RequestsListComponent,
    GrayNavComponent,
    SecondaryDashboardComponent,
    RequestsComponent,
    ReservationComponent,
    ExampleHeader,
    DatepickerComponent
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY"
    }),
    MatDatepickerModule,
    MatNativeDateModule,
    FileUploadModule,
    BsDatepickerModule.forRoot(),
    MatIconModule,
    HttpClientModule,
    NgbModalModule,
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    FileDropModule,
    FormsModule,
    MatMenuModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CalendarCommonModule,
    CalendarDayModule,
    CalendarMonthModule,
    CalendarWeekModule,
    MatProgressBarModule
  ],
  //entry component
  entryComponents: [ExampleHeader],
  providers: [MatCalendar, { provide: DateAdapter, useClass: DateFormat }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale("en-in"); // DD/MM/YYYY
  }
}
