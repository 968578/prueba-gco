import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Producto } from '../../models/models';
import { ProductoService } from '../../service/producto.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { LabelPrimaryComponent } from "../../components/label-primary/label-primary.component";
import { ErrorFormComponent } from "../../components/error-form/error-form.component";
import { InputPrimaryComponent } from "../../components/input-primary/input-primary.component";

@Component({
  selector: 'app-detalles-producto',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, FormsModule, LabelPrimaryComponent, ErrorFormComponent, InputPrimaryComponent],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent implements OnInit {
  

  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45)]),
    descripcion: new FormControl('', Validators.maxLength(200)),
    estado: new FormControl('', Validators.required),
    precio: new FormControl(0, [Validators.required, Validators.min(0), (inp)=>this.validateNumber(inp)]),
    stock: new FormControl(0,  [Validators.required,  Validators.min(0), (inp)=>this.validateNumber(inp)]),
    codigo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    categoriaId: new FormControl('', Validators.required),
  });

    constructor(
      private productosService: ProductoService,
      private route : ActivatedRoute
    ) {}
  

  ngOnInit(): void {
    this.productosService.obtenerProductoPorId(this.route.snapshot.paramMap.get("id")).subscribe((data: any) =>{
      this.productoForm.patchValue(data)
      this.productoForm.disable()
    })
  }

  actualizarProducto(){

  }

  activarEdicion(){
    if(this.productoForm.disabled){
      this.productoForm.enable()
    } else{
      this.productoForm.disable()
    }
  }



  validateNumber(inp :AbstractControl): ValidationErrors | null {
    return isNaN(inp.value) ? { notNumber: true } : null;
  }

}
