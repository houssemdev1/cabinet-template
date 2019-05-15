import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationFourthStepComponent } from './organisation-fourth-step.component';

describe('OrganisationFourthStepComponent', () => {
  let component: OrganisationFourthStepComponent;
  let fixture: ComponentFixture<OrganisationFourthStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationFourthStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationFourthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
