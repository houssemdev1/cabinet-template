import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
  OnDestroy
} from "@angular/core";
import { MatCalendar } from "@angular/material";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats
} from "@angular/material/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
@Component({
  selector: "app-organistion-step",
  templateUrl: "./organistion-step.component.html",
  styleUrls: ["./organistion-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerCustomHeaderExample {
  exampleHeader = OrganistionStepComponent;
}

/** Custom header component for datepicker. */
@Component({
  selector: "app-organistion-step",
  styles: [
    `
      .example-header {
        display: flex;
        align-items: center;
        padding: 0.5em;
      }

      .example-header-label {
        flex: 1;
        height: 1em;
        font-weight: 500;
        text-align: center;
      }

      .example-double-arrow .mat-icon {
        margin: -22%;
      }
    `
  ],
  template: `
    <div class="example-header">
      <button
        mat-icon-button
        class="example-double-arrow"
        (click)="previousClicked('year')"
      >
        <mat-icon>keyboard_arrow_left</mat-icon>
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{ periodLabel }}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button
        mat-icon-button
        class="example-double-arrow"
        (click)="nextClicked('year')"
      >
        <mat-icon>keyboard_arrow_right</mat-icon>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganistionStepComponent<D> implements OnDestroy {
  private destroyed = new Subject<void>();

  constructor(
    private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get periodLabel() {
    return this.dateAdapter
      .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
      .toLocaleUpperCase();
  }

  previousClicked(mode: "month" | "year") {
    this.calendar.activeDate =
      mode === "month"
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
  }

  nextClicked(mode: "month" | "year") {
    this.calendar.activeDate =
      mode === "month"
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
  }
}
