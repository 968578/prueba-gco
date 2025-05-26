import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/models';
import { LabelPrimaryComponent } from "../../components/label-primary/label-primary.component";
import { InputPrimaryComponent } from "../../components/input-primary/input-primary.component";

@Component({
  selector: 'app-formulario-productos',
  imports: [HeaderComponent, FormsModule, LabelPrimaryComponent, InputPrimaryComponent],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent {

    producto: Producto = {
    nombre: '',
    descripcion: '',
    estado: 1,
    precio: 0,
    stock: 0,
    codigo: '',
    fechaCreacion: '', // puede iniciarse vacío o con fecha actual
    categoriaId: 0,
  };

  onSubmit(){
    console.log("lo que ha diggitado el cliente");
    console.log(this.producto);
  }
}
