import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageGeneralInformtionsComponent } from './stage-general-informtions.component';

describe('StageGeneralInformtionsComponent', () => {
  let component: StageGeneralInformtionsComponent;
  let fixture: ComponentFixture<StageGeneralInformtionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageGeneralInformtionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageGeneralInformtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
