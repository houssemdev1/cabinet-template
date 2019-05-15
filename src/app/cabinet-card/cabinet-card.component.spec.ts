import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetCardComponent } from './cabinet-card.component';

describe('CabinetCardComponent', () => {
  let component: CabinetCardComponent;
  let fixture: ComponentFixture<CabinetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
