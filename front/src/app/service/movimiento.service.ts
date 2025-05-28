import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private apiUrl = "http://localhost:8080/movimientos";
  
  constructor(private http : HttpClient) { }

  mapearMovimiento(formValue: any): Movimiento {
    const movimientoModel : Movimiento = {
      productoId: Number(formValue.productoId),
      tipo: Number(formValue.tipo),
      cantidad: Number(formValue.cantidad),
      descripcion: String(formValue.descripcion),
        ...(formValue.id && { id: Number(formValue.id) })
    }
    return movimientoModel;
  }

  creaMovimiento(movimiento: Movimiento): Observable<Movimiento> {
      return this.http.post<Movimiento>(this.apiUrl, movimiento);
  }
  obtenerMovimientosProProducto(idProducto: string): Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(`${this.apiUrl}/${idProducto}`)
  } 
}
