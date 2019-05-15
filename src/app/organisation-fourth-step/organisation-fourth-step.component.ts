import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
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
  selector: "app-organisation-fourth-step",
  templateUrl: "./organisation-fourth-step.component.html",
  styleUrls: ["./organisation-fourth-step.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganisationFourthStepComponent {
  exampleHeader = ExampleHeader;
}
/** Custom header component for datepicker. */
@Component({
  selector: "example-header",
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
      .example-double-arrow {
       border: none;
        background-color: transparent;
        outline: none;
        background:white;
    }
    mat-icon-button :focus {
        border: none;
      }
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
        <mat-icon><img src="/assets/arrow_back.svg"/></mat-icon>
      </button>

      <span class="example-header-label">{{ periodLabel }}</span>

      <button
        mat-icon-button
        class="example-double-arrow"
        (click)="nextClicked('month')"
      >
        <mat-icon><img src="/assets/arrow_forward.svg"/></mat-icon>
      </button>
   
  
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleHeader<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: "month" | "year") {
    this._calendar.activeDate =
      mode === "month"
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: "month" | "year") {
    this._calendar.activeDate =
      mode === "month"
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }
}
