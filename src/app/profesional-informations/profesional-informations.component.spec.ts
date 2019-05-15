import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalInformationsComponent } from './profesional-informations.component';

describe('ProfesionalInformationsComponent', () => {
  let component: ProfesionalInformationsComponent;
  let fixture: ComponentFixture<ProfesionalInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
