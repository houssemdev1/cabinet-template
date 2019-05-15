import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCabinetComponent } from './display-cabinet.component';

describe('DisplayCabinetComponent', () => {
  let component: DisplayCabinetComponent;
  let fixture: ComponentFixture<DisplayCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
