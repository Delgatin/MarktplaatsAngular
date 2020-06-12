import { Directive } from '@angular/core';
import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appNotSameWachtwoord]'
})
export const notSameWachtwoordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const wachtwoord1 = control.get('wachtwoord1');
  const wachtwoord2 = control.get('wachtwoord2');
  return wachtwoord1 && wachtwoord2 && wachtwoord2.value !== wachtwoord1.value ? { notSameWachtwoord: true } : null;
};
