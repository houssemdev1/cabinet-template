import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetProfessionComponent } from './target-profession.component';

describe('TargetProfessionComponent', () => {
  let component: TargetProfessionComponent;
  let fixture: ComponentFixture<TargetProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
