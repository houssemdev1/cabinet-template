import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletProfilComponent } from './complet-profil.component';

describe('CompletProfilComponent', () => {
  let component: CompletProfilComponent;
  let fixture: ComponentFixture<CompletProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
