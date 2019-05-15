import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationFinalStepComponent } from './organisation-final-step.component';

describe('OrganisationFinalStepComponent', () => {
  let component: OrganisationFinalStepComponent;
  let fixture: ComponentFixture<OrganisationFinalStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationFinalStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationFinalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
