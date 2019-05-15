import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsThirdStepComponent } from './characteristics-third-step.component';

describe('CharacteristicsThirdStepComponent', () => {
  let component: CharacteristicsThirdStepComponent;
  let fixture: ComponentFixture<CharacteristicsThirdStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsThirdStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
