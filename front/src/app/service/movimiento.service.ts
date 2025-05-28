import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento, ResponseApi } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private apiUrl = "http://localhost:8080/movimientos1";
  
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

  creaMovimiento(movimiento: Movimiento): Observable<ResponseApi> {
      return this.http.post<ResponseApi>(this.apiUrl, movimiento);
  }
  obtenerMovimientosProProducto(idProducto: string): Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.apiUrl}/${idProducto}`)
  } 
}
