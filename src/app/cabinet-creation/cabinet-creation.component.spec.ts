import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CabinetCreationComponent } from "./cabinet-creation.component";

describe("CabinetCreationComponent", () => {
  let component: CabinetCreationComponent;
  let fixture: ComponentFixture<CabinetCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CabinetCreationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
