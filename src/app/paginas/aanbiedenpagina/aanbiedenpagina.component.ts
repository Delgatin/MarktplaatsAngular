import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductServiceService} from "./service/productService.service";

@Component({
  selector: 'app-aanbiedenpagina',
  templateUrl: './aanbiedenpagina.component.html',
  styleUrls: ['./aanbiedenpagina.component.css']
})

export class AanbiedenpaginaComponent implements OnInit {
  productForm = new FormGroup(
    {
      artikelNaam: new FormControl(''),
      categorie: new FormControl(''),
      omschrijving: new FormControl(''),
      prijs: new FormControl(''),
      bijlage: new FormControl(''),
      verzendmethode: new FormControl('')
    }
  );

  categorieen;
  showExtraInfoCategorieen: boolean;

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit(): void {
    this.categorieen = this.productService.getCategorieen();

    this.categorieen.subscribe(x => {
      this.categorieen = x;
    })
  }

  onSubmit() {
    console.log(JSON.parse(JSON.stringify(this.productForm.value)));
    console.log(this.productForm.getRawValue());
    this.productService.plaatsTeVerkopenProduct(JSON.parse(JSON.stringify(this.productForm.value)))
      .subscribe(
        response => console.log("Succes!"),
        error => console.error("Error!")
      );
  }

  toggleShowCategorieen() {
    this.showExtraInfoCategorieen = !this.showExtraInfoCategorieen;
  }
}
