import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPreviewComponent } from './nav-preview.component';

describe('NavPreviewComponent', () => {
  let component: NavPreviewComponent;
  let fixture: ComponentFixture<NavPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
