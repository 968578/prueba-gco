import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../models/models';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    this.buscarProductos();
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
}
