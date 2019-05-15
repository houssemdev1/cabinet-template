import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSecondStepComponent } from './contract-second-step.component';

describe('ContractSecondStepComponent', () => {
  let component: ContractSecondStepComponent;
  let fixture: ComponentFixture<ContractSecondStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractSecondStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
