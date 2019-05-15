import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCreationComponent } from './global-creation.component';

describe('GlobalCreationComponent', () => {
  let component: GlobalCreationComponent;
  let fixture: ComponentFixture<GlobalCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
