import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltroProducto, Producto, ResponseApi } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = "http://localhost:8080/productos";
  
  constructor(private http: HttpClient) { }

  mapearProducto(formValue: any): Producto {
    const productoModel : Producto = {
      nombre: String(formValue.nombre),
      descripcion: String(formValue.descripcion),
      estado: Number(formValue.estado),
      precio: Number(formValue.precio),
      stock: Number(formValue.stock),
      codigo: String(formValue.codigo),
      categoriaId: Number(formValue.categoriaId),
        ...(formValue.id && { id: Number(formValue.id) })
    }
    return productoModel;
  }
  
  obtenerProductos(filtroProducto: FiltroProducto): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.apiUrl}/buscar` , filtroProducto);
  }

  crearProducto(producto: Producto): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(this.apiUrl, producto);
  }

  obtenerProductoPorId(id: string): Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.apiUrl}/${id}`, { 
    })
  }

  actualizarProducto(producto: Producto): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(this.apiUrl, producto);
  }

  eliminarProducto(id: string): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.apiUrl}/${id}`);
  }

}
