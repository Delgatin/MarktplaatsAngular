import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const notSameEmailValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email1 = control.get('email1');
  const email2 = control.get('email2');
  return email1 && email2 && email2.value !== email1.value ? { notSameEmail: true } : null;
};



