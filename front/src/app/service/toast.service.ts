import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMensaje {
  text: string;
  type: 'success' | 'error' ;
  duration?: number; 
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastGlobal = new Subject<ToastMensaje>();
  toastState$ = this.toastGlobal.asObservable();

  showToast(message: ToastMensaje) {
    this.toastGlobal.next(message);
  }

}
