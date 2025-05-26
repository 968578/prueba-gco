import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = "http://localhost:8080/productos";
  
  constructor(private http: HttpClient) { }

  
    obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
