import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-small-cal",
  templateUrl: "./small-cal.component.html",
  styleUrls: ["./small-cal.component.scss"]
})
export class SmallCalComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      date: null,
      range: null
    });
  }
}
