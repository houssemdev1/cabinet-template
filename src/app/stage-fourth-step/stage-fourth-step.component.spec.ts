import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageFourthStepComponent } from './stage-fourth-step.component';

describe('StageFourthStepComponent', () => {
  let component: StageFourthStepComponent;
  let fixture: ComponentFixture<StageFourthStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageFourthStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageFourthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
