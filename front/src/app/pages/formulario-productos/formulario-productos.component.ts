import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Producto } from '../../models/models';
import { LabelPrimaryComponent } from "../../components/label-primary/label-primary.component";
import { InputPrimaryComponent } from "../../components/input-primary/input-primary.component";
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { ErrorFormComponent } from "../../components/error-form/error-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-productos',
  imports: [HeaderComponent, FormsModule, LabelPrimaryComponent, InputPrimaryComponent, ReactiveFormsModule, ErrorFormComponent, CommonModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent implements OnInit {

  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45)]),
    descripcion: new FormControl('', Validators.maxLength(200)),
    estado: new FormControl('', Validators.required),
    precio: new FormControl(0, [Validators.required, Validators.min(0), (inp)=>this.validateNumber(inp)]),
    stock: new FormControl(0,  [Validators.required,  Validators.min(0), (inp)=>this.validateNumber(inp)]),
    codigo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    categoriaId: new FormControl('', Validators.required),
  })

  onSubmit(){
    if(this.productoForm.invalid){
      return;
    }
    console.log(this.productoForm.valid)
    console.log(this.productoForm.get("nombre")?.errors)
    console.log(this.productoForm.get("descripcion")?.errors)
    console.log(this.productoForm.get("estado")?.errors)
    console.log(this.productoForm.get("precio")?.errors)
    console.log(this.productoForm.get("stock")?.errors)
    console.log(this.productoForm.get("codigo")?.errors)
    console.log(this.productoForm.get("categoriaId")?.errors)
    
    console.log("lo que ha diggitado el cliente");
    console.log(this.productoForm.value);
  }

  validateNumber(inp :AbstractControl): ValidationErrors | null {
    if(isNaN(inp.value)){
      return { notNumber:true}
    } else {
      return null
    }
    // return isNaN(control.value) ? { notNumber: true } : null;
  }

  ngOnInit(): void {
  }
   constructor(private formBuilder: FormBuilder) {}
}
