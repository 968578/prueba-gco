import { Component, OnInit } from '@angular/core';
import { ToastMensaje, ToastService } from '../../service/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'toast',
  imports: [CommonModule],
  template: `
    <div *ngIf="toast" 
         [ngClass]="toast.type" 
         class="fixed top-5 right-5 p-4 rounded shadow-lg text-white"
         [style.backgroundColor]="getColor(toast.type)">
      {{ toast.text }}
    </div>
  `,
})
export class ToastComponent implements OnInit {
  toast: ToastMensaje | null = null;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toastState$.subscribe(msg => {
      this.toast = msg;
      setTimeout(() => this.toast = null, msg.duration || 3000);
    });
  }

  getColor(type: string) {
    switch(type) {
      case 'success': return '#48bb78';
      case 'error': return '#f56565'; 
      default: return '#333';
    }
  }
}
