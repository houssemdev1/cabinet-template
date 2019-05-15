import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsStepComponent } from './characteristics-step.component';

describe('CharacteristicsStepComponent', () => {
  let component: CharacteristicsStepComponent;
  let fixture: ComponentFixture<CharacteristicsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
