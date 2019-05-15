import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageThirdStepComponent } from './stage-third-step.component';

describe('StageThirdStepComponent', () => {
  let component: StageThirdStepComponent;
  let fixture: ComponentFixture<StageThirdStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageThirdStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
