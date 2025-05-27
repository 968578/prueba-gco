import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { LabelPrimaryComponent } from "../../components/label-primary/label-primary.component";
import { InputPrimaryComponent } from "../../components/input-primary/input-primary.component";
import { ErrorFormComponent } from "../../components/error-form/error-form.component";
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../models/models';

@Component({
  selector: 'app-formulario-productos',
  imports: [HeaderComponent, FormsModule, LabelPrimaryComponent, InputPrimaryComponent, ReactiveFormsModule, ErrorFormComponent, CommonModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent implements OnInit {
  
  constructor(private productosService: ProductoService) {}
  
  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45)]),
    descripcion: new FormControl('', Validators.maxLength(200)),
    estado: new FormControl('', Validators.required),
    precio: new FormControl(0, [Validators.required, Validators.min(0), (inp)=>this.validateNumber(inp)]),
    stock: new FormControl(0,  [Validators.required,  Validators.min(0), (inp)=>this.validateNumber(inp)]),
    codigo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    categoriaId: new FormControl('', Validators.required),
  })

  submitProducto(){
    if(this.productoForm.invalid){
      return;
    }
    
    const formValue = this.productoForm.value;
    
    const productoModel : Producto = {
      nombre: String(formValue.nombre),
      descripcion: String(formValue.descripcion),
      estado: Number(formValue.estado),
      precio: Number(formValue.precio),
      stock: Number(formValue.stock),
      codigo: String(formValue.codigo),
      categoriaId: Number(formValue.categoriaId),
    }
      
    this.productosService.crearProducto(productoModel).subscribe({
    next: (res) => {
      console.log('Producto creado con éxito:', res);
      
      this.productoForm.reset();
    },
    error: (err) => {
      // debo agregar aqui un manjeador
      console.log("Error")
      console.log(err);
    }
  });

    
  }

  validateNumber(inp :AbstractControl): ValidationErrors | null {
    return isNaN(inp.value) ? { notNumber: true } : null;
  }

  ngOnInit(): void {
  }
}
