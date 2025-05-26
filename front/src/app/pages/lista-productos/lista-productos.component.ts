import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../models/models';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-lista-productos',
  imports: [HeaderComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  productos: Producto[] = []

  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    try {
      this.productosService.obtenerProductos().subscribe(data => {
        this.productos = data;
        console.log("data-->")
        console.log(data)
      });
      
    } catch (error) {
      console.log(error)
      // aqui se debe agregar un erro manejado.
    }
  }
}
