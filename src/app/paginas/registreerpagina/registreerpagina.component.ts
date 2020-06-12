import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ProductService} from './service/product.service';
import {notSameEmailValidator} from './validators/not-same-email.directive';
import {notSameWachtwoordValidator} from './validators/not-same-wachtwoord.directive';



@Component({
  selector: 'app-registreerpagina',
  templateUrl: './registreerpagina.component.html',
  styleUrls: ['./registreerpagina.component.css']
})
export class RegistreerpaginaComponent implements OnInit {
  bezorgOpties = [];
  registreerForm = new FormGroup({
    email1: new FormControl('',
      [
        Validators.required,
        Validators.pattern('^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$'),
        Validators.max(64)
      ]),
    email2: new FormControl('',
      [Validators.required, Validators.pattern('^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$')]),
    wachtwoord1: new FormControl('',
      [Validators.pattern('.*\\d.*'), Validators.pattern('.*\\s.*'), Validators.min(9)]),
    wachtwoord2: new FormControl('',
      [Validators.pattern('.*\\d.*'), Validators.pattern('.*\\s.*')]),
    magazijnAfhalen: new FormControl(),
    thuisAfhalen: new FormControl(),
    versturen: new FormControl(),
    versturenOnderRembours: new FormControl(),

    straatnaam: new FormControl(''),
    huisnummer: new FormControl(''),
    huisnummerToevoeging: new FormControl(''),
    plaatsnaam: new FormControl(''),


    prijs: new FormControl(''),
    bijlage: new FormControl(''),
    verzendmethode: new FormControl('')
  }, {validators: [notSameEmailValidator, notSameWachtwoordValidator]});


  constructor() { }


private addCheckboxes() {
  this.bezorgOpties.forEach((o, i) => {
    const control = new FormControl(i === 0); // if first item set to true, else false
    (this.registreerForm.controls.orders as FormArray).push(control);
  });
}


  ngOnInit(): void {
  }

}
