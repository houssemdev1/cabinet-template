import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageFirstStepComponent } from './stage-first-step.component';

describe('StageFirstStepComponent', () => {
  let component: StageFirstStepComponent;
  let fixture: ComponentFixture<StageFirstStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageFirstStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
