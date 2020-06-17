import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {notSameEmailValidator} from './validators/not-same-email.directive';
import {notSameWachtwoordValidator} from './validators/not-same-wachtwoord.directive';
import {RegistreerService} from './services/registreer.service';
import {Observable} from 'rxjs';
import {AllowedEmail} from './classes/allowed-email';


@Component({
  selector: 'app-registreerpagina',
  templateUrl: './registreerpagina.component.html',
  styleUrls: ['./registreerpagina.component.css']
})
export class RegistreerpaginaComponent implements OnInit {
  bezorgOpties = [
    // tslint:disable-next-line:max-line-length
    {wijze: 'Afhalen Magazijn', def: true, uitleg: 'U moet verkochte producten afgeven in het magazijn, waarna de koper ze daar kan afhalen.', evalue: 'AfhalenMagazijn'},
    // tslint:disable-next-line:max-line-length
    {wijze: 'Afhalen Thuis', def: false, uitleg: 'U moet uw adres opgeven, een koper kan dan gekochte producten dan bij u thuis afhalen.', evalue: 'AfhalenThuis'},
    // tslint:disable-next-line:max-line-length
    {wijze: 'Versturen', def: false, uitleg: 'Indien u iets verkoopt ben u verantwoordelijk voor verzending naar koper', evalue: 'Versturen'},
    // tslint:disable-next-line:max-line-length
    {wijze: 'Versturen onder Rembours', def: false, uitleg: 'Indien u iets verkoopt ben u verantwoordelijk voor verzending naar koper', evalue: 'VersturenOnderRembours' },
  ];
  registreerForm = new FormGroup({
    email1: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(64),
        Validators.pattern('^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$')
      ]
    ),
    email2: new FormControl('',
      [
        Validators.required,
        Validators.pattern('^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$')
      ]
    ),
    wachtwoord1: new FormControl('',
      [
       Validators.pattern(' /^[0-9a-zA-Z]+$/'),
       Validators.min(6)
      ]
    ),
    wachtwoord2: new FormControl(''),
    afhalenMagazijn: new FormControl(this.bezorgOpties[0].def),
    afhalenThuis: new FormControl(this.bezorgOpties[1].def),
    versturen: new FormControl(this.bezorgOpties[2].def),
    versturenRembours: new FormControl(this.bezorgOpties[3].def),
    straatnaam: new FormControl('', this.adresConditionallyRequiredValidator),
    huisnummer: new FormControl('', this.adresConditionallyRequiredValidator),
    huisnummerToevoeging: new FormControl(''),
    postcode: new FormControl('',  this.adresConditionallyRequiredValidator),
    plaatsnaam: new FormControl('',  this.adresConditionallyRequiredValidator),
    land: new FormControl('Nederland'),
    regelementakkoord: new FormControl(false)
  }, {validators: [notSameEmailValidator] });

  // , notSameWachtwoordValidator
  verificatieVanEmail: Observable<AllowedEmail>;
  verificatieObject: AllowedEmail;
  verificatieVanEmailIs: boolean;
  veld1Id: string;
  bezorgboxen: string[] = [];
  constructor(private registreerService: RegistreerService) { }

  ngOnInit(): void {
    this.veld1Id = 'email1';
    this.verificatieObject = {
      email: 'forbiddentestemail@test.nl',
      allowed: false
    };
    this.verificatieVanEmailIs = false;
    this.registreerForm.get('email1').valueChanges.subscribe(value => {
            if (this.registreerForm.value.email1 !== this.verificatieObject.email){
              this.verificatieVanEmailIs = false;
            }
    });

    this.registreerForm.get('afhalenThuis').valueChanges
      .subscribe(value => {
        this.registreerForm.get('straatnaam').updateValueAndValidity();
        this.registreerForm.get('plaatsnaam').updateValueAndValidity();
        this.registreerForm.get('huisnummer').updateValueAndValidity();
        this.registreerForm.get('postcode').updateValueAndValidity();
      });
  }

  onSubmit() {
    console.warn(this.registreerForm.value);
    if (this.registreerForm.value.afhalenMagazijn){
      this.bezorgboxen.push(this.bezorgOpties[0].evalue);
    }
    if (this.registreerForm.value.afhalenThuis){
      this.bezorgboxen.push(this.bezorgOpties[1].evalue);
    }
    if (this.registreerForm.value.versturen){
      this.bezorgboxen.push(this.bezorgOpties[2].evalue);
    }
    if (this.registreerForm.value.versturenRembours){
      this.bezorgboxen.push(this.bezorgOpties[3].evalue);
    }
    if (Array.isArray(this.bezorgboxen) && !this.bezorgboxen.length){
      this.bezorgboxen.push('AfhalenMagazijn');
    }

    const registreerDto: any = {
      email : this.registreerForm.value.email1,
      regelementAkkoord: true,
      bezorgwijzen: this.bezorgboxen,
      wachtwoord: this.registreerForm.value.wachtwoord1,
      adres:
        this.registreerForm.value.straatnaam + ' ' +
        this.registreerForm.value.huisnummer +
        this.registreerForm.value.huisnummerToevoeging + ' ' +
        this.registreerForm.value.postcode + ' ' +
        this.registreerForm.value.land,
    };

    console.warn(registreerDto);

    this.registreerService.register(registreerDto)
      .subscribe(
        response => console.log('Succes!'),
        error => console.error('Error!')
      );
  }

  verifyEmail() {
    console.log('verfiyEmail has been called');
    this.verificatieVanEmail = this.registreerService.checkValid(this.registreerForm.value.email1);
    this.verificatieVanEmail.subscribe(x => {
          this.verificatieObject = x;
          console.log(x);
          this.verificatieVanEmailIs = x.allowed;
          if (this.verificatieVanEmailIs){
            this.veld1Id = 'email1-valid';
          }
      });
  }

    adresConditionallyRequiredValidator(formControl: AbstractControl) {
    if (!formControl.parent) {
      return null;
    }
    if (formControl.parent.get('afhalenThuis').value) {
      return Validators.required(formControl);
    }
    return null;
  }
}
