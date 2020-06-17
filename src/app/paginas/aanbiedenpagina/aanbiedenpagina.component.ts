import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from './service/product.service';


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
      bijlagen: new FormControl(''),
      verzendmethode: new FormControl('')
    }
  );

  categorieen;
  showExtraInfoCategorieen: boolean;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categorieen = this.productService.getCategorieen();
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.productService.plaatsTeVerkopenProduct(this.productForm.value)
      .subscribe(
        response => console.log('Succes!'),
        error => console.error(error)
      );
  }

  toggleShowCategorieen() {
    this.showExtraInfoCategorieen = !this.showExtraInfoCategorieen;
  }
}
