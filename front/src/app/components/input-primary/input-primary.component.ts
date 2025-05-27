import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-primary',
  imports: [ReactiveFormsModule],
  templateUrl: './input-primary.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPrimaryComponent),
      multi: true,
    },
  ]
})
export class InputPrimaryComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() disabled = false;
  @Input() name = '';

  value = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}
