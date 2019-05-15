import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayNavComponent } from './gray-nav.component';

describe('GrayNavComponent', () => {
  let component: GrayNavComponent;
  let fixture: ComponentFixture<GrayNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
