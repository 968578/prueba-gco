import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ResponseApi } from '../models/models';
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
  
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  obtenerProductoPorId(id: string): Observable<Producto>{
    return this.http.get<Producto>(`${this.apiUrl}/${id}`, { 
    })
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.apiUrl, producto);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
