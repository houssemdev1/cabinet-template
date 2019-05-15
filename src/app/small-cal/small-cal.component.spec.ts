import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCalComponent } from './small-cal.component';

describe('SmallCalComponent', () => {
  let component: SmallCalComponent;
  let fixture: ComponentFixture<SmallCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
