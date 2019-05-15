import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import { DataService } from "../data.service";
import {
  UploadEvent,
  UploadFile,
  FileSystemFileEntry,
  FileSystemDirectoryEntry
} from "ngx-file-drop";

import { FileUploader } from "ng2-file-upload";
const URL = "https://evening-anchorage-3159.herokuapp.com/api/";
@Component({
  selector: "app-stage-third-step",
  templateUrl: "./stage-third-step.component.html",
  styleUrls: ["./stage-third-step.component.scss"]
})
export class StageThirdStepComponent implements OnInit {
  /**************************************************************** */
  file;
  item: String;

  constructor(private data: DataService, private router: Router) {}

  /********************************************************************** */

  // const URL = '/api/';

  ngOnInit() {}

  nextStep() {
    this.router.navigate(["/etape4/etape4-1"]);
  }

  onFileAdd(file: File) {
    this.file = file;
  }

  onFileRemove() {
    this.file = null;
  }

  urls = [];
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
          console.log(this.urls);
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  /**drop method********************* */

  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart: true
  });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  fileObject: any;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  /*
public onFileSelected(event: EventEmitter<File[]>) {
  const file: File = event[0];

  console.log(file);

  this.urls.push(event);
  console.log("here array of images", this.urls);
}
*/
  onDelete(url) {
    for (let i = 0; i < this.urls.length; i++) {
      const index: number = this.urls.indexOf(url);
      if (index !== -1) {
        this.urls.splice(index, 1);
      }
    }
  }
  async onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

    console.log("====>", file);

    this.readBase64(file).then(data => {
      this.urls.push(data);
      console.log(data);
    });
    //this.urls.push(sessionStorage.getItem("data"));
    console.log("===>", this.urls);
  }
  readBase64(file) {
    var reader = new FileReader();
    var future = new Promise((resolve, reject) => {
      reader.addEventListener(
        "load",
        function() {
          resolve(reader.result);
        },
        false
      );

      reader.addEventListener(
        "error",
        function(event) {
          reject(event);
        },
        false
      );

      reader.readAsDataURL(file);
    });
    return future;
  }
}
