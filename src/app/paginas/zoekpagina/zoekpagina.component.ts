import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ZoekService} from './service/zoek.service';
import {Observable} from 'rxjs';
import {Product} from './model/product';

@Component({
  selector: 'app-zoekpagina',
  templateUrl: './zoekpagina.component.html',
  styleUrls: ['./zoekpagina.component.css']
})
export class ZoekpaginaComponent implements OnInit {
  zoekForm = new FormGroup({
    id: new FormControl(''),
    artikelNaam: new FormControl(''),
    prijs: new FormControl(''),
    omschrijving: new FormControl(''),
    verkoper: new FormControl(''),
    bod: new FormControl(''),
    tijdVanPlaatsen: new FormControl(''),
    bezorgwijzen: new FormControl(''),
    bijlagen: new FormControl(''),
    categories: new FormControl(''),
  });

  id: number;
  producten: Product[];

  constructor(private zoekService: ZoekService) {
  }

  ngOnInit(): void {
    const objectObservable: Observable<any> = this.zoekService.getAllProducten();
    objectObservable.subscribe(p => {
      this.producten = p;
    });
  }

  clickButton() {
    const objectObservable: Observable<any> = this.zoekService.getProductById(this.id);
    objectObservable.subscribe(p => {
      this.producten = p;
    });
  }
}
