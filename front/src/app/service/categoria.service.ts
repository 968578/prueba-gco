import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, ResponseApi } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = "http://localhost:8080/categorias";
  
  constructor(private http : HttpClient) { }

  obtenerCategorias(): Observable<ResponseApi>{
    return this.http.get<ResponseApi>(this.apiUrl)
  } 
}
