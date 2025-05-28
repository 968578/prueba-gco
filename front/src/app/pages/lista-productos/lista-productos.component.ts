import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Categoria, Producto } from '../../models/models';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaService } from '../../service/categoria.service';

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
    private categoriasService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.buscarProductos();
    this.buscarCategorias();
  }

  buscarProductos() {
    try {
      this.productosService.obtenerProductos(this.filtro).subscribe(data => {
        this.productos = data;
      });
      
    } catch (error) {
      console.log(error)
      // aqui se debe agregar un erro manejado.
    }
  }

  buscarCategorias(){
    this.categoriasService.obtenerMovimientosProProducto().subscribe({
      next: (data)=>{
        this.categorias = data;
      },
      error: (err) =>{
        console.log("error")
        console.log(err)
      }
    })
  }

}
