import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataService {

  constructor(private http: HttpClient) {}

  //Api for card informations
  getData() {
    return this.http.get("/assets/datas.json");
  }

}
