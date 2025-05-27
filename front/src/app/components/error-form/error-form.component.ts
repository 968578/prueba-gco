import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-form',
  imports: [],
  template:"<p class='text-red-600 text-sm' >{{error}}</p>" ,
})
export class ErrorFormComponent {
  @Input() error ="";
}
