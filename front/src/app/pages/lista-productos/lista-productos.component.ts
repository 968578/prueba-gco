import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Categoria, Producto, ResponseApi } from '../../models/models';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from '../../service/categoria.service';
import { HandlerResponse } from '../../shared/handler';

@Component({
  selector: 'app-lista-productos',
  imports: [HeaderComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  filtro = {
  nombre: '',
  codigo: '',
  categoriaId: 0
};

  productos: Producto[] = []
  categorias: Categoria[] = []

  constructor(
    private productosService: ProductoService,
    private categoriasService: CategoriaService,
    private handler : HandlerResponse,
  ) {}

  ngOnInit(): void {
    this.buscarProductos();
    this.buscarCategorias();
  }

  buscarProductos() {
    
      this.productosService.obtenerProductos(this.filtro).subscribe({
        next:(data)=>{ 
          this.handler.manejaRespuestaGenerica(
            data,
            (d)=>{
              this.productos = d
            },
            "",
            "Fallo al obtener los productos"
          )
        }, 
        error: (err)=>{
          console.log(err)
          this.handler.manejarError("Fallo al obtener los productos")
        }
      })
  }

  buscarCategorias(){
    this.categoriasService.obtenerCategorias().subscribe({
      next: (res: ResponseApi)=>{
        this.handler.manejaRespuestaGenerica(
          res,
          (d)=>{
            this.categorias = d;
          },
          "",
          "Fallo al obtener categorias"
        )  
      },
      error:(err)=>{
        console.log(err)
        this.handler.manejarError("Fallo al obtener categorias")
      }
    })
  }

}
