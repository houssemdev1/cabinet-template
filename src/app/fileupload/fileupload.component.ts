import { Component, OnInit, EventEmitter } from "@angular/core";
import { FileUploader } from "ng2-file-upload";

const URL = "https://evening-anchorage-3159.herokuapp.com/api/";
@Component({
  selector: "app-fileupload",
  templateUrl: "./fileupload.component.html",
  styleUrls: ["./fileupload.component.scss"]
})
export class FileuploadComponent implements OnInit {
  constructor() {}
  urls = [];
  datas;
  ngOnInit() {
    console.log(this.urls);
  }
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
  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

    console.log(file);

    this.readBase64(file).then(function(data) {
      localStorage.setItem("data", data);
    });
    this.urls.push(localStorage.getItem("data"));
    localStorage.clear();
  }
  readBase64(file): Promise<any> {
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
