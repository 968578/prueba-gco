import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'label-primary',
  imports: [CommonModule],
  template: `
    <div class="flex">
      <label class="block text-sm text-gray-600 mb-1">{{label}}</label>
      <p class="text-red-600 bold" *ngIf="obligatorio">*</p>
    </div>`
})
export class LabelPrimaryComponent {

  @Input() label ="";
  @Input() obligatorio = false;
}
