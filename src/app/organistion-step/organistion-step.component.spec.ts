import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganistionStepComponent } from './organistion-step.component';

describe('OrganistionStepComponent', () => {
  let component: OrganistionStepComponent;
  let fixture: ComponentFixture<OrganistionStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganistionStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganistionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
