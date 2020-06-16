import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  urlPostTeVerkopenProduct = "http://localhost:9080/Marktplaats_war_exploded/main/artikelen/verkoopArtikel"
  urlCategorieen = "http://localhost:9080/Marktplaats_war_exploded/main/artikelen/categorieen"

  constructor(private _http: HttpClient) {
  }

  getCategorieen() {
    return this._http.get<any>(this.urlCategorieen)
  }

  plaatsTeVerkopenProduct(formData) {
    return this._http.post<any>(this.urlPostTeVerkopenProduct, formData);
  }
}
