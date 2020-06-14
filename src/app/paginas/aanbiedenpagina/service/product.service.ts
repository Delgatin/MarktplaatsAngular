import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlPostTeVerkopenProduct = "http://localhost:9080/Marktplaats_war_exploded/main/verkoop/testAngular"
  urlCategorieen = "http://localhost:9080/Marktplaats_war_exploded/main/verkoop/categorieen"

  constructor(private _http: HttpClient) {
  }

  getCategorieen() {
    return this._http.get<any>(this.urlCategorieen)
  }

  plaatsTeVerkopenProduct(formData) {
    return this._http.post<any>(this.urlPostTeVerkopenProduct, formData);
  }
}
