import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {AllowedEmail} from '../classes/allowed-email';

@Injectable({
  providedIn: 'root'
})
export class RegistreerService {
  url = 'http://localhost:9080/Marktplaats_war_exploded/main/registreren';
  url2 = 'http://localhost:9080/Marktplaats_war_exploded/main/registreren/canBeUsed?email=';

  constructor(private doelhttp: HttpClient) { }

  register(value: any) {
    return this.doelhttp.post<any>(this.url, value);
  }

  checkValid(email1: string) {
    const target = `${this.url2}${email1}`;
    console.log(target.toString());
    return this.doelhttp.get<AllowedEmail>(target);
  }
}
