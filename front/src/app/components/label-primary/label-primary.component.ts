import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'label-primary',
  imports: [CommonModule],
  templateUrl: './label-primary.component.html',
})
export class LabelPrimaryComponent {

  @Input() label ="";
  @Input() obligatorio = false;
}
