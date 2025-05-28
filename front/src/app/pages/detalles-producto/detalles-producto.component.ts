import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProductoService } from '../../service/producto.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelPrimaryComponent } from "../../components/label-primary/label-primary.component";
import { ErrorFormComponent } from "../../components/error-form/error-form.component";
import { InputPrimaryComponent } from "../../components/input-primary/input-primary.component";
import { CustomValidators } from '../../shared/validators';
import { ModalMovimientosComponent } from "../../components/modal-movimientos/modal-movimientos.component";

@Component({
  selector: 'app-detalles-producto',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, FormsModule, LabelPrimaryComponent, ErrorFormComponent, InputPrimaryComponent, ModalMovimientosComponent],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent implements OnInit {
  mostrarModal = true;
  constructor(
    private productosService: ProductoService,
    private route : ActivatedRoute
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
    this.productosService.obtenerProductoPorId(this.route.snapshot.paramMap.get("id")).subscribe((data: any) =>{
      this.productoForm.patchValue(data)
      this.productoForm.disable()
    })
  }

  actualizarProducto(){
    if(this.productoForm.invalid){
      return;
    }
    const formValue = this.productoForm.value
    const producto = this.productosService.mapearProducto(formValue);
    this.productosService.actualizarProducto(producto).subscribe((data: any) =>{
      this.productoForm.patchValue(data)
      this.productoForm.disable()
      // agregar respuesta de ok.
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
    console.log("elimnando este producto")
    const idProducto = String(this.route.snapshot.paramMap.get("id"));
    this.productosService.eliminarProducto(idProducto).subscribe((data) =>{
      console.log("respuesta eliminacion-->");
      console.log(data);
    })
  }

  crearMovimiento(){
    this.mostrarModal= true;
  }

  mostrarOcultarModal(bandera: boolean){
    this.mostrarModal = bandera;
  }


}
