import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/validators';
import { CommonModule } from '@angular/common';
import { InputPrimaryComponent } from "../input-primary/input-primary.component";
import { LabelPrimaryComponent } from "../label-primary/label-primary.component";
import { ErrorFormComponent } from "../error-form/error-form.component";

@Component({
  selector: 'modal-movimientos',
  imports: [ReactiveFormsModule, CommonModule, InputPrimaryComponent, LabelPrimaryComponent, ErrorFormComponent],
  templateUrl: './modal-movimientos.component.html',
  styleUrl: './modal-movimientos.component.css'
})
export class ModalMovimientosComponent {

  @Input() mostrarModal = true;
  @Output() ocultarModal = new EventEmitter<boolean>();

  movimientoForm = new FormGroup({
    productoId: new FormControl(""),
    tipo: new FormControl(1, Validators.required),
    cantidad: new FormControl('', [Validators.required, Validators.min(1),(inp)=>CustomValidators.validateNumber(inp) ]),
    descripcion: new FormControl(''),
  })

    guardar(){
      console.log("guardando movimiento")
  }


  cerrarModal(){
    this.ocultarModal.emit(false);
  }

}
