package com.prueba_gco.prueba_gco.infraestructure.web;

import com.prueba_gco.prueba_gco.domain.model.Movimiento;
import com.prueba_gco.prueba_gco.domain.ports.in.MovimientoUseCase;
import com.prueba_gco.prueba_gco.infraestructure.web.response.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movimientos")
public class MovimientoController {
    private final MovimientoUseCase movimientoUseCase;

    public MovimientoController(MovimientoUseCase movimientoUseCase){
        this.movimientoUseCase = movimientoUseCase;
    }

    @PostMapping()
    public ResponseEntity<?> crearMovimiento(@Valid  @RequestBody Movimiento movimiento, BindingResult resultValidation){

        if(resultValidation.hasErrors()){
            return ResponseEntity.badRequest().body(ApiResponse.error(resultValidation));
        }
        Movimiento movimientoCreado = movimientoUseCase.crearMovimiento(movimiento);
        return ResponseEntity.ok(new ApiResponse("ok", movimientoCreado));
    }

    @GetMapping("/{idProducto}")
    public ResponseEntity<?> consultarMovimientosProducto(@PathVariable Long idProducto){
        List<Movimiento> movimientos =  movimientoUseCase.consultarMovimientosProducto(idProducto);
        return ResponseEntity.ok(new ApiResponse("ok",movimientos));
    }
}
