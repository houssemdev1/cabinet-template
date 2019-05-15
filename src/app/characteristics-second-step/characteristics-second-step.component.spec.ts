import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsSecondStepComponent } from './characteristics-second-step.component';

describe('CharacteristicsSecondStepComponent', () => {
  let component: CharacteristicsSecondStepComponent;
  let fixture: ComponentFixture<CharacteristicsSecondStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsSecondStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
