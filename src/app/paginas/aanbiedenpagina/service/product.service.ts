import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _url = "http://localhost:9080/Marktplaats_war_exploded/main/verkoop/testAngular"

  constructor(private _http: HttpClient) {
  }

  register(userData) {
    return this._http.post<any>(this._url, userData);
  }
}
