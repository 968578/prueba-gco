import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Producto } from '../../models/models';
import { ProductoService } from '../../service/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  imports: [HeaderComponent],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent implements OnInit {
  producto! :Producto;

    constructor(
      private productosService: ProductoService,
      private route : ActivatedRoute
    ) {}
  

  ngOnInit(): void {
    this.productosService.obtenerProductoPorId(this.route.snapshot.paramMap.get("id")).subscribe((data) =>{
      this.producto = data;
      console.log("producto pedido")
      console.log(data)
    })
  }

}
