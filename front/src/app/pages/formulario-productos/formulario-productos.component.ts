import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { LabelPrimaryComponent } from "../../components/label-primary/label-primary.component";
import { InputPrimaryComponent } from "../../components/input-primary/input-primary.component";
import { ErrorFormComponent } from "../../components/error-form/error-form.component";
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../service/producto.service';
import { Categoria, Producto, ResponseApi } from '../../models/models';
import { CustomValidators } from '../../shared/validators';
import { CategoriaService } from '../../service/categoria.service';
import { HandlerResponse } from '../../shared/handler';

@Component({
  selector: 'app-formulario-productos',
  imports: [HeaderComponent, FormsModule, LabelPrimaryComponent, InputPrimaryComponent, ReactiveFormsModule, ErrorFormComponent, CommonModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent implements OnInit {
    
  categorias: Categoria[] = []
  
    constructor(
    private productosService: ProductoService,
    private categoriasService: CategoriaService,
    private handler : HandlerResponse
  ) {}
  
  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45)]),
    descripcion: new FormControl('', Validators.maxLength(200)),
    estado: new FormControl('', Validators.required),
    precio: new FormControl(0, [Validators.required, Validators.min(0), (inp)=>CustomValidators.validateNumber(inp)]),
    stock: new FormControl(0,  [Validators.required,  Validators.min(0), (inp)=>CustomValidators.validateNumber(inp)]),
    codigo: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    categoriaId: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
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

  submitProducto(){
    if(this.productoForm.invalid){
      return;
    }

    const formValue = this.productoForm.value
    const productoModel = this.productosService.mapearProducto(formValue);
      
    this.productosService.crearProducto(productoModel).subscribe({
    next: (res: ResponseApi) => {

      this.handler.manejaRespuestaGenerica(
        res,
        ()=>{
          this.productoForm.reset();
        },
        "Creado",
        "Fallo al crear el producto"
      )      
    },
    error: (err) => {
      console.log(err)
      this.handler.manejarError("Fallo al crear el producto")
    }
  });
  }

}
