import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageSecondStepComponent } from './stage-second-step.component';

describe('StageSecondStepComponent', () => {
  let component: StageSecondStepComponent;
  let fixture: ComponentFixture<StageSecondStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageSecondStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
