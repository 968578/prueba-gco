import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/validators';
import { CommonModule } from '@angular/common';
import { InputPrimaryComponent } from "../input-primary/input-primary.component";
import { LabelPrimaryComponent } from "../label-primary/label-primary.component";
import { ErrorFormComponent } from "../error-form/error-form.component";
import { ActivatedRoute } from '@angular/router';
import { MovimientoService } from '../../service/movimiento.service';
import { ResponseApi } from '../../models/models';
import { HandlerResponse } from '../../shared/handler';

@Component({
  selector: 'modal-movimientos',
  imports: [ReactiveFormsModule, CommonModule, InputPrimaryComponent, LabelPrimaryComponent, ErrorFormComponent],
  templateUrl: './modal-movimientos.component.html',
  styleUrl: './modal-movimientos.component.css'
})
export class ModalMovimientosComponent {

  @Input() mostrarModal = true;
  @Output() ocultarModal = new EventEmitter<boolean>();
  @Output() recargarComponente = new EventEmitter();

  constructor(
    private movimientoService: MovimientoService,
    private route : ActivatedRoute,
    private handler: HandlerResponse,
  ) {}

  movimientoForm = new FormGroup({
    productoId: new FormControl(""),
    tipo: new FormControl(1, Validators.required),
    cantidad: new FormControl('', [Validators.required, Validators.min(1),(inp)=>CustomValidators.validateNumber(inp) ]),
    descripcion: new FormControl(''),
  })

    guardar(){
      if(this.movimientoForm.invalid){
        return
      }
      const idProducto = String(this.route.snapshot.paramMap.get("id"))
      this.movimientoForm.patchValue({productoId: idProducto});
      
      const movimientoModel = this.movimientoService.mapearMovimiento(this.movimientoForm.value);
      this.movimientoService.creaMovimiento(movimientoModel).subscribe({
        next: (res: ResponseApi)=>{
        this.handler.manejaRespuestaGenerica(
          res,
          (d)=>{
            this.movimientoForm.reset({
              productoId: "",
              tipo: 1,
              cantidad: "",
              descripcion: ""
            });
            this.cerrarModal();
            this.recargarComponente.emit();

          },
          "Movimiento creado",
          "Fallo al obtener categorias"
        )  
        },
        error:(err)=>{
          console.log(err)
          this.handler.manejarError("Fallo al crear el movimiento")
        }
      })
  }


  cerrarModal(){
    this.ocultarModal.emit(false);
  }

}
