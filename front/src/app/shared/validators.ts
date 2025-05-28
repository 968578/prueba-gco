import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static validateNumber(control: AbstractControl): ValidationErrors | null {
    return isNaN(control.value) ? { notNumber: true } : null;
  }
}
