import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProductoService } from '../../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelPrimaryComponent } from "../../components/label-primary/label-primary.component";
import { ErrorFormComponent } from "../../components/error-form/error-form.component";
import { InputPrimaryComponent } from "../../components/input-primary/input-primary.component";
import { CustomValidators } from '../../shared/validators';
import { ModalMovimientosComponent } from "../../components/modal-movimientos/modal-movimientos.component";
import { Categoria, Movimiento, ResponseApi } from '../../models/models';
import { MovimientoService } from '../../service/movimiento.service';
import { CategoriaService } from '../../service/categoria.service';
import { HandlerResponse } from '../../shared/handler';

@Component({
  selector: 'app-detalles-producto',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, FormsModule, LabelPrimaryComponent, ErrorFormComponent, InputPrimaryComponent, ModalMovimientosComponent],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent implements OnInit {
  movimientos!: Movimiento[];
  categorias: Categoria[] = [];
  mostrarModal = false;
  constructor(
    private productosService: ProductoService,
    private route : ActivatedRoute,
    private movimientosService : MovimientoService,
    private categoriasService : CategoriaService,
    private handler : HandlerResponse,
    private router: Router
  ) {}
  
  productoForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45)]),
    descripcion: new FormControl('', Validators.maxLength(200)),
    estado: new FormControl('', Validators.required),
    precio: new FormControl(0, [Validators.required, Validators.min(0), (inp)=>CustomValidators.validateNumber(inp)]),
    stock: new FormControl(0,  [Validators.required,  Validators.min(0), (inp)=>CustomValidators.validateNumber(inp)]),
    codigo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    categoriaId: new FormControl('', Validators.required),
  });
    

  ngOnInit(): void {
    const idProducto = String(this.route.snapshot.paramMap.get("id"))
    
    this.obtenerProducto(idProducto);
    this.obtenerMovimientos(idProducto);
    this.buscarCategorias();

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


  obtenerProducto(idProducto: string){
    this.productosService.obtenerProductoPorId(idProducto).subscribe({
      next: (res: ResponseApi)=>{
        this.handler.manejaRespuestaGenerica(
          res,
          (d)=>{
            this.productoForm.patchValue(d)
            this.productoForm.disable()
          },
          "",
          "Fallo al obtener el producto"
        )  
      },
      error:(err)=>{
        console.log(err)
        this.handler.manejarError("Fallo al obtener el producto")
      }
  })
}

  obtenerMovimientos(idProducto: string){
    this.movimientosService.obtenerMovimientosProProducto(idProducto).subscribe({
      next: (res: ResponseApi)=>{
        this.handler.manejaRespuestaGenerica(
          res,
          (d)=>{
            this.movimientos = d;
          },
          "",
          "Fallo al obtener movimientos"
        )  
      },
      error: (err)=>{
        console.log(err)
        this.handler.manejarError("Fallo al obtener movimientos")
      }
    })
  }

  actualizarProducto(){
    if(this.productoForm.invalid){
      return;
    }
    const formValue = this.productoForm.value
    const producto = this.productosService.mapearProducto(formValue);

    this.productosService.actualizarProducto(producto).subscribe({
      next: (res: ResponseApi)=>{
        this.handler.manejaRespuestaGenerica(
          res,
          (d)=>{
            this.productoForm.patchValue(d)
            this.productoForm.disable()
          },
          "Actualizado",
          "Fallo al actualizar el producto"
        )
      },
      error: (err)=>{
        console.log(err)
        this.handler.manejarError("Fallo al actualizar el producto")
      }
    })

  }

  activarEdicion(){
    if(this.productoForm.disabled){
      this.productoForm.enable()
    } else{
      this.productoForm.disable()
    }
  }

  eliminar(){
    const idProducto = String(this.route.snapshot.paramMap.get("id"));
    this.productosService.eliminarProducto(idProducto).subscribe({
      next:(res: ResponseApi)=>{
        this.handler.manejaRespuestaGenerica(
          res,
          (d)=>{},
          "Eliminado",
          "Fallo al eliminar el producto"
        )
        this.router.navigate([""])
      }, 
      error: (err)=>{
        console.log(err);
        this.handler.manejarError("Fallo al eliminar el producto")
      }
    })
  }

  crearMovimiento(){
    this.mostrarModal= true;
  }

  mostrarOcultarModal(bandera: boolean){
    this.mostrarModal = bandera;
  }


}
