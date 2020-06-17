import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZoekService {
  urlZoekAlleProducten = 'http://localhost:9080/Marktplaats_war_exploded/main/artikelen';
  urlZoekProduct = 'http://localhost:9080/Marktplaats_war_exploded/main/artikelen/';
  urlTest = 'http://localhost:9080/Marktplaats_war_exploded/main/zoek';

  constructor(private http: HttpClient) {
  }

  getAllProducten() {
    return this.http.get<any>(this.urlZoekAlleProducten);
  }

  getProductById(id) {
    return this.http.get<any>(this.urlZoekProduct + id);
  }

  getTest() {
    return this.http.get<any>(this.urlTest);
  }
}
