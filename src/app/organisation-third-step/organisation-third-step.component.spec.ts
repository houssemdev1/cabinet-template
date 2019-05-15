import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationThirdStepComponent } from './organisation-third-step.component';

describe('OrganisationThirdStepComponent', () => {
  let component: OrganisationThirdStepComponent;
  let fixture: ComponentFixture<OrganisationThirdStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationThirdStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
